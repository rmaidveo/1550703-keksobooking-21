'use strict';
(function () {
  const closeCard = window.card.popup.querySelector('.popup__close');
  const pinHandle = document.querySelector('.map__pin--main');
  const fieldset = document.querySelectorAll(`fieldset`);
  const timeIn = document.querySelector('#timein');
  const timeOut = document.querySelector('#timeout');

  function closeCards() {
    window.card.removeCard();
    document.removeEventListener('keydown', window.map.onPopupEscPress);
  }

  closeCard.addEventListener('click', function () {
    closeCards();
  });

  window.map.fillAddress(pinHandle);
  window.map.disabledElement(fieldset);

  pinHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    window.map.abledElement(fieldset);
    window.map.fillAddress(pinHandle);
  });

  pinHandle.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      window.map.abledElement(fieldset);
      window.map.fillAddress(pinHandle);
    }
  });

  window.form.typeOption.addEventListener('change', function () {
    window.form.minPriceValidation();
  });

  window.form.userPrice.addEventListener('change', function () {
    window.form.priceValidation();
  });

  timeIn.addEventListener('change', function () {
    window.form.validTime(timeIn, timeOut);
  });

  timeOut.addEventListener('change', function () {
    window.form.validTime(timeOut, timeIn);
  });

  window.form.roomCount.addEventListener('change', function () {
    window.form.getRoomGuestValidation();
  });

  window.form.guestCount.addEventListener('change', function () {
    window.form.getRoomGuestValidation();
  });

})();
