'use strict';

(function () {
  const KEY_ENTER = 'Enter';
  const KEY_ESCAPE = 'Escape';

  window.utils = {
    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    getContent: function (render, arr, container) {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < arr.length; i++) {
        fragment.appendChild(render(arr[i]));
      }
      container.appendChild(fragment);
    },
    getElementsList: function (length, list, getElement) {
      for (let i = 0; i < length; i++) {
        list.push(getElement());
      }
      return list;
    },
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
