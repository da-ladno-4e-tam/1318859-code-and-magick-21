'use strict';

(function () {
  const KEY_ENTER = 'Enter';
  const KEY_ESCAPE = 'Escape';

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
