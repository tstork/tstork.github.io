define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
        "appid": "",
        "webmap": "fc085a824b9940ca898dba56cfe5c64d",
    "form_layer": {
        "id": ""
    },
    "details": {
        "Title": "Test Form",
        "Logo": "http://www.reach-initiative.org/wp-content/uploads/2014/06/Logo_Front_Page.gif",
        "Description": "This is a test"
    },
    "fields": {
    },
    "theme": "basic", // see values in themes.js
    "oauthappid": null,
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    // //developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.tomstork.maps.arcgis.com",
    "units": null,
    "useSmallHeader": true,
    "enableSharing": true,
    "defaultMapExtent": true,
    "pushpinColor": "red",
    "nextBasemap": "hybrid",
    "defaultBasemap": "topo",
    "selectedTitleField": {},
    "disableViewer": false,
    "enableAttachments": true,
    "attachmentIsRequired": false,
    "attachmentLabel": "",
    "attachmentHelpText": "",
    "showLayer": false,
    "disableLogo": false,
    "enableBasemapToggle": false,
    "locate":false,
    "locationSearchOptions": {
        "enableMyLocation": true,
        "enableSearch": true,
        "enableLatLng": true,
        "enableUSNG": false,
        "enableMGRS": false,
        "enableUTM": false
    },
    "locationSearch": true,
    //When searchExtent is true the locator will prioritize results within the current map extent.
    "searchExtent": false,
    "searchLayers":[{
        "id": "",
        "fields": []
    }],
    "attachmentInfo":{
    },
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
        }]
    },
    "bitlyLogin": "tstork",
    "bitlyKey": "R_ceaaf1731ce147b883b35b7581a3ed78"
});