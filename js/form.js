'use strict';
const roomCount = document.querySelector('#room_number');
const guestCount = document.querySelector('#capacity');
const typeOption = document.querySelector('#type');
const userPrice = document.querySelector('#price');
const buttonReset = document.querySelector('.ad-form__reset');

const getRoomGuestValidation = () => {
  let roomValue = roomCount.value;
  let guestValue = guestCount.value;
  if (roomValue === '100' && guestValue !== '0') {
    guestCount.setCustomValidity('100 комнат доступно только для не гостей');
  } else if (guestValue === '0' && roomValue !== '100') {
    guestCount.setCustomValidity('Не гостям доступно только 100 комнат');
  } else if (guestValue === '0' && roomValue === '100') {
    guestCount.setCustomValidity('');
  } else if (roomValue < guestValue) {
    guestCount.setCustomValidity('Количество гостей превышает количество комнат');
  } else {
    guestCount.setCustomValidity('');
  }
};

const minPriceValidation = () => {
  if (typeOption.value === 'bungalow') {
    userPrice.placeholder = window.constants.MIN_BUNGALO_PRICE;
  }
  if (typeOption.value === 'flat') {
    userPrice.placeholder = window.constants.MIN_FLAT_PRICE;
  }
  if (typeOption.value === 'house') {
    userPrice.placeholder = window.constants.MIN_HOUSE_PRICE;
  }
  if (typeOption.value === 'palace') {
    userPrice.placeholder = window.constants.MIN_PALACE_PRICE;
  }
};

const priceValidation = () => {
  const value = userPrice.value;
  if (typeOption.value === 'bungalow' && value < window.constants.MIN_BUNGALO_PRICE) {
    userPrice.setCustomValidity('Минимальная сумма: ' + window.constants.MIN_BUNGALO_PRICE);
  } else if (typeOption.value === 'flat' && value < window.constants.MIN_FLAT_PRICE) {
    userPrice.setCustomValidity('Минимальная сумма: ' + window.constants.MIN_FLAT_PRICE);
  } else if (typeOption.value === 'house' && value < window.constants.MIN_HOUSE_PRICE) {
    userPrice.setCustomValidity('Минимальная сумма: ' + window.constants.MIN_HOUSE_PRICE);
  } else if (typeOption.value === 'palace' && value < window.constants.MIN_PALACE_PRICE) {
    userPrice.setCustomValidity('Минимальная сумма: ' + window.constants.MIN_PALACE_PRICE);
  } else {
    userPrice.setCustomValidity('');
  }
  userPrice.reportValidity();
};

const validTime = (firstEl, secondEl) => {
  if (firstEl.value === "12:00") {
    secondEl.value = "12:00";
  }
  if (firstEl.value === "13:00") {
    secondEl.value = "13:00";
  }
  if (firstEl.value === "14:00") {
    secondEl.value = "14:00";
  }
};

const onSubmitSend = (evt) => {
  evt.preventDefault();
  window.server.upload(new FormData(window.constants.form), window.succses.onSuccses, window.error.onError);

};

const onButtonReset = (evt) => {
  evt.preventDefault();
  window.succses.resetFormSuccsess();

};

window.constants.form.addEventListener('submit', onSubmitSend);

buttonReset.addEventListener('click', (evt) => {
  onButtonReset(evt);
});

window.form = {
  userPrice,
  typeOption,
  guestCount,
  roomCount,
  getRoomGuestValidation,
  minPriceValidation,
  priceValidation,
  validTime,
};
