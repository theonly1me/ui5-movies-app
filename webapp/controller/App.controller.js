sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/demo/basicTemplate/model/formatter',
    'sap/base/Log',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
  ],
  function (Controller, formatter, Log, Filter, FilterOperator) {
    'use strict';

    return Controller.extend('sap.ui.demo.basicTemplate.controller.App', {
      formatter,
      onInit() {
        Log.info('Controller has been initialized!');
      },
      onBeforeRendering() {
        Log.info('The will be rendered shortly');
      },
      onButtonPress(sValue, oEvent) {
        sap.ui.require(
          ['sap/m/MessageToast'],
          function (MessageToast) {
            const oResourceBundle = this.getOwnerComponent()
              .getModel('i18n')
              .getResourceBundle();
            MessageToast.show(oResourceBundle.getText('search') + sValue);
          }.bind(this)
        );

        const sCity = this.byId('city').getValue();
        const sGenre = this.byId('genre').getSelectedItem().getKey();

        const oCalendar = this.byId('calendar');
        const oRowBinding = oCalendar.getBinding('rows');
        const oFilterGenre = sGenre
          ? new Filter('genre', FilterOperator.EQ, sGenre)
          : null;
        const oFilterCity = sCity
          ? new Filter('info', FilterOperator.Contains, sCity)
          : null;

        oRowBinding.filter(oFilterGenre);
        debugger;
        const aRows = oCalendar.getAggregation('rows');
        aRows.forEach(oItem =>
          oItem.getBinding('appointments').filter(oFilterCity)
        );
      },
      onAfterRendering() {
        Log.info('The view has been rendered');
      },
      onExit() {
        Log.info('Controller has been destroyed');
      },
    });
  }
);
