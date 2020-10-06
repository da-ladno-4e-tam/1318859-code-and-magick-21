'use strict';

(function () {
  const KEY_ENTER = 'Enter';
  const KEY_ESCAPE = 'Escape';

  window.getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  window.getContent = function (render, arr, container) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < arr.length; i++) {
      fragment.appendChild(render(arr[i]));
    }
    container.appendChild(fragment);
  };

  window.getElementsList = function (length, list, getElement) {
    for (let i = 0; i < length; i++) {
      list.push(getElement());
    }
    return list;
  };

  window.util = {
    isEnterEvent: function (evt, action) {
      if (evt.key === KEY_ENTER) {
        evt.preventDefault();
        action();
      }
    },
    isEscapeEvent: function (evt, action) {
      if (evt.key === KEY_ESCAPE) {
        evt.preventDefault();
        action();
      }
    }
  };
})();
