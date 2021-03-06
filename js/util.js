'use strict';
const fieldset = document.querySelectorAll(`fieldset`);

const enabledElement = (element) => {
  for (let i = 0; i < element.length; i++) {
    element[i].removeAttribute("disabled");
  }
};

const disabledElement = (element) => {
  for (let i = 0; i < element.length; i++) {
    element[i].setAttribute("disabled", true);
  }
};

const removeCard = () => {
  if (window.constants.MAP.contains(window.card.popup)) {
    window.card.popup.remove();
  }
};

const disabledState = () => {
  window.map.fillAddress(window.constants.PIN_HANDLE);
  disabledElement(fieldset);
};

const resetForm = () => {
  window.photos.resetPhotosInForm();
  window.constants.form.reset();
  window.map.fillAddress(window.constants.PIN_HANDLE);
};

const removeElinForm = (el) => {
  if (document.contains(el)) {
    el.remove();
  }
};

const onEscPress = (evt, action) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    action();
  }
};

const addIdToData = (array) => {
  return array.map((item, index) => {
    item.offer.id = index;

    return item;
  });
};

window.util = {
  fieldset,
  enabledElement,
  disabledElement,
  removeCard,
  disabledState,
  resetForm,
  removeElinForm,
  onEscPress,
  addIdToData,
};
