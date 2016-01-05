/*global define,document */
/*jslint sloppy:true,nomen:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define([
  "dojo/_base/declare",
  "dojo/_base/lang",

  "dojo/on",
  "dojo/dom",
  "dojo/dom-class",

  "esri/arcgis/utils",
  "esri/InfoTemplate",

  "esri/dijit/Legend",

  "dojo/i18n!application/nls/resources",

  "dijit/a11yclick",
  
  "application/FeatureNav",
  "application/wrapper/main-jquery-deps",

  "dojo/domReady!"
], function (
  declare, lang,
  on,
  dom, domClass,
  arcgisUtils, InfoTemplate,
  Legend,
  nls,
  a11yclick,
  FeatureNav
) {
  return declare(null, {
    config: {},
    startup: function (config) {
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      if (config) {
        this.config = config;

        if (this.config.disableViewer) {
          this._reportError(nls.viewer.appLoadingFailedMessage);
        }
        //supply either the webmap id or, if available, the item info
        var itemInfo = this.config.itemInfo || this.config.webmap;
        this._createWebMap(itemInfo);
      } else {
        var error = new Error("Main:: Config is not defined");
        this.reportError(error);
      }
    },
    reportError: function (error) {
      // remove loading class from body
      domClass.remove(document.body, "app-loading");
      domClass.add(document.body, "app-error");
      // an error occurred - notify the user. In this example we pull the string from the
      // resource.js file located in the nls folder because we've set the application up
      // for localization. If you don't need to support multiple languages you can hardcode the
      // strings here and comment out the call in index.html to get the localization strings.
      // set message
      var node = dom.byId("loading_message");
      if (node) {
        if (this.config && this.config.i18n) {
          node.innerHTML = this.config.i18n.map.error + ": " + error.message;
        } else {
          node.innerHTML = "Unable to create map: " + error.message;
        }
      }
    },


    _displayPopupContent: function (feature) {

      if (feature) {

        if (!feature.infoTemplate) {
          var it = new InfoTemplate("", "${*}");
          feature.setInfoTemplate(it);
        }
        var title = feature.getTitle();
        var content = feature.getContent();
        dom.byId("popup_title").innerHTML = title;
        dom.byId("popup_content").innerHTML = content;


        if (feature.attributes) {
          //router.go("/feature/layer/" + feature.attributes.OBJECTID);
        }

      }
      var popup = this.map.infoWindow;
      if (popup && popup.features && popup.features.length) {
        dom.byId("feature_count").innerHTML = (popup.selectedIndex + 1) + " of " + popup.features.length;
      }

    },

    _setStrings: function () {



      var node;
      node = dom.byId("toggleNavText");
      if (node) {
        node.innerHTML = nls.viewer.toggleNavigationText;
      }

      node = dom.byId("appTitle");
      var title = this.config.details.Title || this.itemInfo.item.title || "";
      if (node) {
        node.innerHTML = title;
      }
      window.document.title = title;


      node = dom.byId("shareText");
      if (node) {
        node.innerHTML = nls.viewer.share;
      }

      node = dom.byId("submitReport");
      if (node) {
        node.innerHTML = nls.viewer.btnSubmitReportText;
      }

      node = dom.byId("reportsText");
      if (node) {
        node.innerHTML = nls.viewer.viewReportsTabText;
      }

      node = dom.byId("legendText");
      if (node) {
        node.innerHTML = nls.viewer.viewLegendTabText;
      }

      node = dom.byId("aboutText");
      if (node) {
        node.innerHTML = nls.viewer.viewAboutusTabText;
      }

      var desc = this.config.details.Description || this.itemInfo.item.description || "";
      node = dom.byId("aboutTextBody");
      if (node) {
        node.innerHTML = desc;
      }


    },

    _legend: function () {
      this._mapLegend = new Legend({
        map: this.map,
        layerInfos: this.layerInfos
      }, dom.byId("mapLegend"));
      this._mapLegend.startup();
    },

    // Sample function
    _viewer: function () {


      domClass.remove(dom.byId("navbarTop"), "hidden");

      this._setStrings();


      this.map.infoWindow.set("popupWindow", false);

      this._legend();

      var popup = this.map.infoWindow;

      if (popup) {

        //when the selection changes update the side panel to display the popup info for the 
        //currently selected feature. 
        on(popup, "selection-change", lang.hitch(this, function () {
          var feature = popup.getSelectedFeature();
          this._displayPopupContent(feature);
        }));

        //when the selection is cleared remove the popup content from the side panel. 
        on(popup, "clear-features", function () {
          //dom.byId replaces dojo.byId
          dom.byId("feature_count").innerHTML = "Click to select feature(s)";
          //registry.byId replaces dijit.byId
          dom.byId("popup_title").innerHTML = "Select a feature";
          dom.byId("popup_content").innerHTML = "Sort through results and select a feature to view.";
          domClass.add(dom.byId("feature_pagination"), "hidden");
        });

        on(dom.byId("previous"), a11yclick, lang.hitch(this, this.map.infoWindow.selectPrevious));
        on(dom.byId("next"), a11yclick, lang.hitch(this, this.map.infoWindow.selectNext));

        //When features are associated with the  map's info window update the sidebar with the new content. 
        on(popup, "set-features", lang.hitch(this, function () {
          this._displayPopupContent(popup.getSelectedFeature());



          //enable navigation if more than one feature is selected 
          if (popup.features.length > 1) {
            domClass.remove(dom.byId("feature_pagination"), "hidden");
          } else {
            domClass.add(dom.byId("feature_pagination"), "hidden");
          }

        }));

      }



      var layer = this.map.getLayer(this.config.form_layer.id);


      var fn = new FeatureNav({
        map: this.map,
        num: 8,
        start: 0,
        order: "ASC",
        activeSourceIndex: 0,
        visible: true,
        searchTerm: "",
        sources: [{
          template: "${OBJECTID}",
          featureLayer: layer
        }],
      }, "featureNav");
      fn.startup();
    },

    // create a map based on the input web map id
    _createWebMap: function (itemInfo) {
      // set extent from config/url
      itemInfo = this._setExtent(itemInfo);
      // Optionally define additional map config here for example you can
      // turn the slider off, display info windows, disable wraparound 180, slider position and more.
      var mapOptions = {};
      // set zoom level from config/url
      mapOptions = this._setLevel(mapOptions);
      // set map center from config/url
      mapOptions = this._setCenter(mapOptions);
      // create webmap from item
      arcgisUtils.createMap(itemInfo, "mapDiv", {
        mapOptions: mapOptions,
        usePopupManager: true,
        editable: this.config.editable,
        bingMapsKey: this.config.bingKey
      }).then(lang.hitch(this, function (response) {
        // Once the map is created we get access to the response which provides important info
        // such as the map, operational layers, popup info and more. This object will also contain
        // any custom options you defined for the template. In this example that is the 'theme' property.
        // Here' we'll use it to update the application to match the specified color theme.
        // console.log(this.config);
        this.map = response.map;
        this.itemInfo = response.itemInfo;
        this.layerInfos = arcgisUtils.getLegendLayers(response);
        // remove loading class from body
        domClass.remove(document.body, "app-loading");
        // Start writing my code
        this._viewer();
        // map has been created. You can start using it.
        // If you need map to be loaded, listen for it's load event.
      }), this.reportError);
    },

    _setLevel: function (options) {
      var level = this.config.level;
      //specify center and zoom if provided as url params 
      if (level) {
        options.zoom = level;
      }
      return options;
    },

    _setCenter: function (options) {
      var center = this.config.center;
      if (center) {
        var points = center.split(",");
        if (points && points.length === 2) {
          options.center = [parseFloat(points[0]), parseFloat(points[1])];
        }
      }
      return options;
    },

    _setExtent: function (info) {
      var e = this.config.extent;
      //If a custom extent is set as a url parameter handle that before creating the map
      if (e) {
        var extArray = e.split(",");
        var extLength = extArray.length;
        if (extLength === 4) {
          info.item.extent = [[parseFloat(extArray[0]), parseFloat(extArray[1])], [parseFloat(extArray[2]), parseFloat(extArray[3])]];
        }
      }
      return info;
    }

  });
});