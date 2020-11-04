'use strict';
(function () {
  const URL = 'https://21.javascript.pages.academy/keksobooking/data';
  const StatusCode = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 10000;

  function load(onSuccses, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onSuccses(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;
    xhr.send();
  }
  window.server = {
    load,
  };
})();
