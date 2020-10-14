'use strict';

(function () {
  const TIMEOUT = 3000;
  const StatusCode = {
    OK: 200
  };
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.timeout = TIMEOUT;

  function catchResponseErrors(onSuccess, onError, flag) {
    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText, flag);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения', flag);
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс', flag);
    });
  }

  function load(onLoad, onError) {
    const URL = 'https://21.javascript.pages.academy/code-and-magick/data';

    catchResponseErrors(onLoad, onError);
    xhr.open('GET', URL);
    xhr.send();
  }

  function save(data, onSave, onError) {
    const URL = 'https://21.javascript.pages.academy/code-and-magick';

    catchResponseErrors(onSave, onError, 'save');
    xhr.open('POST', URL);
    xhr.send(data);
  }

  window.backend = {
    load: load,
    save: save
  };
})();
