'use strict';

(function () {
  window.colorize = {
    changeColor: function (obj, arr, property) {
      obj.elem.addEventListener('click', function () {
        const color = window.getRandomElement(arr);
        const input = obj.input;
        obj.elem.style = `${property}: ${color}`;
        input.value = `${color}`;
      });
    }
  };
})();
