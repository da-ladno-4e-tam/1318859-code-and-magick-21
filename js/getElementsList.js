'use strict';

(function () {
  window.getElementsList = function (length, list, getElement) {
    for (let i = 0; i < length; i++) {
      list.push(getElement());
    }
    return list;
  };
})();
