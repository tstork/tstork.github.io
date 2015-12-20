﻿define(
   ({
    map: {
      error: "Не удалось создать карту"
    },
    onlineStatus: {
      offline: "В настоящий момент вы работаете в автономном режиме. Данные, отправленные через форму, будут сохранены локально, пока не появится подключение к серверу.",
      reconnecting: "Повторное подключение&hellip;",
      pending: "${total} ожидающих правок будет отправлено при восстановлении подключения к сети."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Моя организация",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Мои ресурсы",
          favoritesLabel: "Избранное"
        },
        title: "Выбрать веб-карту",
        searchTitle: "Поиск",
        ok: "Ок",
        cancel: "Отмена",
        placeholder: "Введите слово для поиска"
      },
      groupdlg: {
        items: {
          organizationLabel: "Моя организация",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Мои ресурсы",
          favoritesLabel: "Избранное"
        },
        title: "Выбрать группу",
        searchTitle: "Поиск",
        ok: "Ок",
        cancel: "Отмена",
        placeholder: "Введите слово для поиска"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Ссылка на GeoForm"
      }
    },
    user: {
      all: "все",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Ничего",
      utm_easting: "По долготе",
      utm_zone_number: "Номер зоны",
      selectLayerTabText: "${formSection} Выберите форму",
      geoFormGeneralTabText: "${formSection} Введите информацию",
      locationInformationText: "${formSection} Выберите местоположение",
      submitInformationText: "${formSection} Заполните форму",
      submitInstructions: "Добавить эту информацию к карте.",
      myLocationText: "Текущее местоположение",
      locationDescriptionForMoreThanOneOption: "Укажите местоположение объекта, щелкнув/коснувшись карты или с помощью одной из опций.",
      locationDescriptionForOneOption: "Укажите местоположение объекта, щелкнув/коснувшись карты или с помощью следующей опции.",
      locationDescriptionForNoOption: "Укажите местоположение объекта, щелкнув/коснувшись карты.",
      addressText: "Поиск",
      geographic: "Широта/Долгота",
      locationTabText: "Местоположение",
      locationPopupTitle: "Местоположение",
      submitButtonText: "Отправить инфо об объекте",
      submitButtonTextLoading: "Отправка&hellip;",
      formValidationMessageAlertText: "Следующие поля необходимы:",
      selectLocation: "Выберите местоположение для отправки.",
      emptylatitudeAlertMessage: "Введите координату ${openLink}широты${closeLink}.",
      emptylongitudeAlertMessage: "Введите координату ${openLink}долготы${closeLink}.",
      shareUserTitleMessage: "Спасибо за ваше участие!",
      entrySubmitted: "Ваш объект был добавлен к карте.",
      shareThisForm: "Опубликовать эту форму",
      shareUserTextMessage: "Рассказать остальным об отправке с помощью опций.",
      addAttachmentFailedMessage: "Не удалось добавить вложение к слою",
      addFeatureFailedMessage: "Не удалось добавить объект к слою",
      noLayerConfiguredMessage: "При загрузке или поиске редактируемого слоя произошла ошибка. Для того, чтобы отобразить форму и начать ее заполнять, добавьте редактируемый Векторный слой к Веб-карте.",
      placeholderLatitude: "Широта (Y)",
      placeholderLongitude: "Долгота (X)",
      latitude: "Широта",
      longitude: "Долгота",
      findMyLocation: "Найти меня",
      finding: "Поиск&hellip;",
      backToTop: "Наверх",
      addressSearchText: "Ваша отправка появится здесь. Можно переместить булавку, чтобы уточнить местоположение.",
      shareModalFormText: "Ссылка на форму",
      close: "Закрыть",
      locationNotFound: "Невозможно найти местоположение.",
      setLocation: "Задать местоположение",
      find: "Поиск адреса или места",
      attachment: "Вложение",
      toggleDropdown: "Сброс",
      invalidString: "Введите допустимое значение.",
      invalidSmallNumber: "Введите корректное ${openStrong}integer${closeStrong} значение в диапазоне от -32768 до 32767.",
      invalidNumber: "Введите корректное ${openStrong}целое${closeStrong} значение в диапазоне от -2147483648 до 2147483647.",
      invalidFloat: "Введите корректно значение ${openStrong}с плавающей запятой${closeStrong}.",
      invalidDouble: "Введите корректное значение ${openStrong}с плавающей запятой${closeStrong}.",
      invalidLatLong: "Введите корректное значение широты и долготы.",
      invalidUTM: "Введите корректное значение координат UTM.",
      invalidUSNG: "Введите корректное значение координат USNG.",
      invalidMGRS: "Введите корректное значение координат MGRS.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "Выбрать&hellip;",
      applyEditsFailedMessage: "Извините, введенную информацию добавить не удалось. Попробуйте еще раз.",
      requiredFields: "Следующее поле необходимо. Укажите допустимое входное значение.",
      requiredField: "(необходимо)",
      error: "Ошибка",
      textRangeHintMessage: "${openStrong}Подсказка:${closeStrong} Минимальное значение ${minValue} и Максимальное значение ${maxValue}",
      dateRangeHintMessage: "${openStrong}Hint:${closeStrong} Минимальная дата ${minValue} и Максимальная дата ${maxValue}",
      remainingCharactersHintMessage: "${value} символов осталось",
      mapFullScreen: "Полноэкранный режим",
      mapRestore: "Восстановить",
      filterSelectEmptyText: "Выбрать",
      invalidLayerMessage: "Слой формы не существует. Настройте приложение и укажите слой.",
      selectedLayerText: "Все",
      fileUploadStatus: "Статус загрузки файла",
      uploadingBadge: "&nbsp;Загрузка&hellip;",
      successBadge: "&nbsp;Загружено",
      retryBadge: "Повторить",
      errorBadge: "Ошибка загрузки&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Слишком большой файл для вложения",
      exceededFileCountError: "Превышено максимально допустимое количество вложений",
      selectFileTitle: "Выбрать файл",
      btnSelectFileText: "Выбрать файл",
      btnViewSubmissions: "Посмотреть отправки"
    },
    builder: {
      gettingStarted: "Начало работы",
      dateSettings: "Настройки данных",
      hiddenDateField: "Скрыть это поле даты",
      preventPastDates: "Запретить прошедшие даты",
      preventFutureDates: "Запретить будущие даты",
      useCurrentDate: "Укажите в этом поле текущие дату и время",
      configure: "Настройка",
      configureField: "Настроить поле \'${fieldName}\'",
      invalidUser: "Извините, у вас нет прав на просмотр этого элемента",
      invalidWebmapSelectionAlert: "В выбранной веб-карте нет подходящего слоя для использования. Добавьте редактируемый Векторный слой, чтобы продолжить.",
      invalidWebmapSelectionAlert2: "Для получения дополнительной информации см. ${openLink}Что такое сервис объектов?${closeLink}",
      selectFieldsText: "Выбрать поля для формы",
      selectThemeText: "Выбрать тему формы",
      setViewerText: "Настроить вьюер",
      introText: "Начать",
      webmapText: "Веб-карта",
      layerText: "Слой",
      detailsText: "Детали",
      fieldsText: "Поля",
      styleText: "Стиль",
      viewerText: "Вьюер",
      optionText: "Опции",
      previewText: "Предварительный просмотр",
      publishText: "Опубликовать",
      optionsApplicationText: "Опции",
      titleText: "Конструктор",
      descriptionText: "GeoForm - это настраиваемый шаблон для изменения данных через форму в ${link1}Сервисе объектов${closeLink}. Это приложение позволяет пользователям вводить данные через форму, а не через всплывающее окно на карте, при этом сохраняются все преимущества работы с ${link2}Веб-картой${closeLink} и редактируемыми сервисами объектов. Выполните следующие шаги, чтобы создать и настроить свое приложение GeoForm.",
      btnPreviousText: "Предыдущий",
      btnNextText: "Следующий",
      webmapTabTitleText: "Выбрать веб-карту",
      viewWebmap: "Посмотреть веб-карту",
      webmapDetailsText: "Выбрана веб-карта ${webMapTitleLink}${webMapTitle}${closeLink}. Чтобы выбрать другую, щелкните кнопку \'Выбрать веб-карту\'",
      btnSelectWebmapText: "Выбрать веб-карту",
      btnSelectWebmapTextLoading: "Загрузка&hellip;",
      layerTabTitleText: "Выбрать редактируемые слои",
      selectLayerLabelText: "Слой",
      selectLayerDefaultOptionText: "Выбрать слой",
      enableBasemapToggle: "Показать переключатель базовых карт",
      enableBasemapToggleDescription: "Можно настроить GeoForm, чтобы Показать/Скрыть переключатель базовых карт",
      defaultBasemap: "Переключатель базовых карт",
      secondaryBasemap: "Базовая карта по умолчанию",
      detailsTabTitleText: "Детали формы",
      detailTitleLabelText: "Заголовок",
      detailLogoLabelText: "Рисунок логотипа",
      descriptionLabelText: "Инструкции & Детали формы",
      fieldDescriptionLabelText: "Текст справки (дополнительно)",
      fieldDescriptionHelpText: "Введите краткое описание или инструкции для этого поля.",
      fieldHintHelpText: "Замещающий текст для поля.",
      fieldTabFieldHeaderText: "Поле",
      fieldTabLabelHeaderText: "Подпись",
      fieldTabDisplayTypeHeaderText: "Показать как",
      fieldTabOrderColumnText: "Порядок",
      fieldTabVisibleColumnText: "Включено",
      displayFieldText: "Показать поле",
      selectMenuOption: "Выбрать меню",
      selectRadioOption: "Переключатель",
      selectTextOption: "Текст",
      selectDateOption: "Выбор даты",
      selectRangeOption: "Touch-Spinner",
      selectCheckboxOption: "Окно метки",
      selectMailOption: "Email",
      selectUrlOption: "URL",
      selectTextAreaOption: "Область текста",
      previewApplicationText: "Предварительный просмотр приложения",
      saveApplicationText: "Сохранить приложение",
      saveText: "Сохранить",
      toggleNavigationText: "Переключить навигацию",
      formPlaceholderText: "Моя форма",
      shareBuilderInProgressTitleMessage: "Публикация GeoForm",
      shareBuilderProgressBarMessage: "Пожалуйста, подождите&hellip;",
      shareBuilderTitleMessage: "Успешно! Элемент сохранен",
      shareBuilderTextMessage: "Моно начать сбор информации, открыв к ней доступ другим",
      shareModalFormText: "Ссылка на форму",
      shareBuilderSuccess: "Ваш GeoForm обновлен и опубликован!",
      geoformTitleText: "Geo Form",
      layerTabText: "Это слои, из которого будет строиться GeoForm. Он должен быть сервисом объектов, который доступен для редактирования и с правами доступа для вашей аудитории. При выборе всех полей форма позволит выбрать, какой слой формы отправить.",
      detailsTabText: "Используйте поля Детали формы для настройки Заголовка, добавления логотипа и краткого описания для пользователей GeoForm. В описание можно добавить ссылки на другие источники, контактную информацию, и даже указать картографическое веб-приложение, отображающее данные, собранные при помощи GeoForm.",
      fieldsTabText: "Здесь можно выбрать, какие поля будут видны при заполнении формы, настроить Подписи, которые будут видны, и добавить короткие описания, которые могут помочь при вводе данных.",
      styleTabText: "Настройте стиль GeoForm с помощью тем, которые вам нравятся.",
      viewerTabText: "Настройте опции для просмотра данных, собранных из GeoForm.",
      publishTabText: "Если настройка геоформы завершена, сохраните приложение и настройте к нему общий доступ. В любой момент можно вернуться к конструктору и продолжить настройку приложения.",
      headerSizeLabel: "Размер заголовка",
      smallHeader: "Использовать Маленький заголовок",
      bigHeader: "Использовать Большой заголовок",
      pushpinText: "Кнопка",
      doneButtonText: "Сохранить и выйти",
      fieldTabPlaceHolderHeaderText: "Подсказка (дополнительно)",
      enableAttachmentLabelText: "${openStrong}Разрешить вложения${closeStrong}",
      enableAttachmentLabelHint: "Здесь можно включить/отключить вложения",
      attachmentIsRequiredLabelText: "${openStrong}Необходимо вложение${closeStrong}",
      attachmentIsRequiredLabelHint: "При необходимости можно обязать пользователей добавлять вложения.",
      attachmentLabelText: "Подпись кнопки вложения",
      attachmentLabelHint: "Этот текст появится рядом с кнопкой Вложения. Здесь можно описать, что именно следует прикреплять к объекту (фото, видео, документы и т.д.), требуемый формат файла (.jpeg, .png, .docx, .pdf, etc.), и другие инструкции",
      attachmentDescription: "Описание вложения",
      attachmentHint: "При необходимости можно ввести дополнительные пояснения относительно вложений.",
      jumbotronDescription: "Используйте большой или маленький заголовок для формы. Большой заголовок поможет указать цель приложения, но занимает больше места на экране",
      shareGeoformText: "Кнопки общего доступа через социальные сети",
      shareDescription: "Кнопки социальных сетей дают возможность вашей аудитории легко делиться GeoForm, после отправки данных.",
      defaultMapExtent: "Экстент карты по умолчанию",
      defaultMapExtentDescription: "Карта будет возвращена к экстенту веб-карты по умолчанию после отправки изменений - это можно отменить в любое время.",
      pushpinOptionsDescription: "Для кнопки на карте можно выбрать любой их множества цветов, он должен отличаться от символов на карте, что облегчает пользователю нанесение на карту собственных знаков",
      selectLocationText: "Выбрать местоположение по",
      myLocationText: "Мое местоположение",
      searchText: "Поиск",
      coordinatesText: "Координаты Широты и Долготы",
      usng: "USNG координаты",
      mgrs: "Координаты MGRS",
      utm: "UTM координаты",
      selectLocationSDescription: "Позволить пользователям выбрать местоположение с помощью следующих методов.",
      dragTooltipText: "Перетащите поле в подходящее место",
      showHideLayerText: "Показать слой",
      showHideLayerHelpText: "Вы можете настроить GeoForm на отображение/скрытие слоя. Эта опция применима только к настройке одного слоя.",
      labelHelpMessage: "Подпись",
      placeHolderHintMessage: "Текст подсказки",
      placeHolderHelpMessage: "Текст справки",
      selectTextOptionValue: "Выбор фильтра",
      disableLogo: "Отключить логотип",
      disableLogoDescription: "Можно настроить GeoForm, чтобы Показывать/Скрывать логотип в заголовке формы",
      locateOnLoadText: "Найти меня при загрузке",
      locateOnLoadDescription: "Можно настроить, чтобы при загрузке GeoForm использовал текущее местоположение",
      selectLayerFieldTabText: "Выбрать слой",
      allLayerSelectOptionText: "Все слои",
      disableViewer: "Отключить вьюер",
      disableViewerDescription: "Можно настроить GeoForm для включения/отключения вьюера",
      displayFieldHintText: "Выбранное поле для отображения будет показано во вьюере как поле названия"
    },
    viewer: {
      geocoderCancelText: "Отмена",
      viewMapTabText: "Карта",
      sortHeaderText: "Сортировать по:",
      geocoderPlaceholderText: "Почтовый код, город и т.п.",
      noSearchResult: "Ничего не найдено",
      recordsTabTooltip: "Посмотреть отправки",
      legendTabTooltip: "Легенда",
      aboutUsTabTooltip: "О нас",
      mapTabTooltip: "Карта",
      btnDescendingText: "Desc",
      btnAscendingText: "Asc",
      geometryUnavailableErrorMessage: "Ошибка поиска геометрии объекта",
      infoPopupOffErrorMessage: "Нет информации для отображения.",
      btnLoadMoreText: "Загрузить больше",
      unavailableTitleText: "Без заголовка",
      unavailableConfigMessage: "Не удалось загрузить конфигурацию",
      share: "Опубликовать",
      viewReportsTabText: "Отчеты",
      viewLegendTabText: "Легенда",
      viewAboutusTabText: "О",
      btnSubmitReportText: "Отправить отчет",
      appLoadingFailedMessage: "При загрузке вьюера произошла ошибка."
    }
  })
);