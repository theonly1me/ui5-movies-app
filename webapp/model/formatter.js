sap.ui.define([], function () {
  'use strict';
  return {
    formatDate(sValue) {
      if (!sValue) return null;
      return new Date(sValue);
    },
  };
});
