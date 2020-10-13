'use strict';

(function () {
  const KEY_ENTER = 'Enter';
  const KEY_ESCAPE = 'Escape';

  window.utils = {
    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    getRandomContent: function (render, arr, quantity, container) {
      const fragment = document.createDocumentFragment();
      const usedNumbers = [];
      while (usedNumbers.length < quantity) {
        const usedNumber = window.utils.getRandomElement(arr);
        if (!usedNumbers.includes(usedNumber)) {
          fragment.appendChild(render(usedNumber));
          usedNumbers.push(usedNumber);
        }
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
