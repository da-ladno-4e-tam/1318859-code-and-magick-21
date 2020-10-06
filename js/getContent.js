'use strict';

(function () {
  window.getContent = function (render, arr, container) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < arr.length; i++) {
      fragment.appendChild(render(arr[i]));
    }
    container.appendChild(fragment);
  };
})();
