(()=>{"use strict";(()=>{const e=document.querySelector(".map__overlay").offsetWidth,t=document.querySelector(".map"),n=document.querySelector(".map__pins"),o=document.querySelector(".ad-form"),s=document.querySelector(".map__filters-container"),r=document.querySelector(".map__pin--main");window.constants={PIN_WIDTH:50,PIN_HEIGHT:70,PIN_WIDTH_MAIN:65,PIN_HEIGHT_MAIN:65,PIN_HEIGHT_NEEDLE:22,PIN_MAIN_START:{top:375,left:570},MAP_RANGE_TOP:130,MAX_PIN_ON_MAP:5,MAP_RANGE_BOTTOM:630,APP_COUNTS:8,mapWidth:e,TYPE_TRANSLATE:{palace:"Дворец",flat:"Квартира",house:"Дом",bungalow:"Бунгало"},MAP:t,mapPins:n,form:o,mapFiltersContainer:s,MIN_BUNGALO_PRICE:0,MIN_FLAT_PRICE:1e3,MIN_HOUSE_PRICE:5e3,MIN_PALACE_PRICE:1e4,PIN_HANDLE:r,PRICE_VALUE:{low:"low",middle:"middle",high:"high"},MAX_PRICE:{min:1e4,max:5e4},DEBOUNCE_INTERVAL:500,FILE_TYPES:["gif","jpg","jpeg","png"]}})(),(()=>{const e=document.querySelectorAll("fieldset"),t=e=>{for(let t=0;t<e.length;t++)e[t].setAttribute("disabled",!0)};window.util={fieldset:e,abledElement:e=>{for(let t=0;t<e.length;t++)e[t].removeAttribute("disabled")},disabledElement:t,removeCard:()=>{window.constants.MAP.contains(window.card.popup)&&window.card.popup.remove()},disabledState:()=>{window.map.fillAddress(window.constants.PIN_HANDLE),t(e)},resetForm:()=>{window.constants.form.reset(),window.map.fillAddress(window.constants.PIN_HANDLE)},removeElinForm:(e,t="defaultValue")=>{document.contains(e)&&(e.remove(),t())},onEscPress:(e,t)=>{"Escape"===e.key&&(e.preventDefault(),t())},addIdToData:e=>e.map(((e,t)=>(e.offer.id=t,e)))}})(),(()=>{const e=document.querySelector("#error").content.querySelector("div"),t=e=>{const t="Попробуте перезагрузить страницу";let n;switch(e){case 400:n="Неверный запрос. "+t;break;case 401:n="Пользователь не авторизован";break;case 404:n="Ничего не найдено";break;case 500:n="Внутренняя ошибка сервера";break;default:n=`Cтатус ответа: ${e} ${t}`}return n},n=()=>{window.map.fillAddress(window.constants.PIN_HANDLE)},o=()=>{window.util.removeElinForm(e,n),document.removeEventListener("keydown",s)},s=e=>{window.util.onEscPress(e,o)};window.error={setErrorMessage:t,onError:n=>{e.querySelector(".error__message").textContent=t(n),document.querySelector("main").insertAdjacentElement("afterbegin",e),document.querySelector(".error__button").addEventListener("click",o),e.addEventListener("click",o),document.addEventListener("keydown",s)}}})(),(()=>{const e=document.querySelector("#success").content.querySelector("div"),t=document.querySelectorAll("fieldset"),n=()=>{window.constants.MAP.classList.add("map--faded"),window.constants.form.classList.add("ad-form--disabled"),window.pin.deletePins(),window.util.resetForm(),window.util.disabledElement(t),window.pin.resetMainPin()},o=e=>{window.util.onEscPress(e,s)},s=()=>{window.util.removeElinForm(e,n),document.removeEventListener("keydown",o)};window.succses={onSuccses:()=>{document.querySelector("main").insertAdjacentElement("afterbegin",e),e.addEventListener("click",s),document.addEventListener("keydown",o)}}})(),(()=>{const e=(e,t,n,o=null)=>{const s=new XMLHttpRequest;s.responseType="json",s.addEventListener("load",(()=>{200===s.status?"GET"===e?t(s.response):t():n(s.status)})),s.addEventListener("error",(()=>{n("Произошла ошибка соединения")})),s.addEventListener("timeout",(()=>{n("Запрос не успел выполниться за "+s.timeout+"мс")})),s.timeout=1e4,"GET"===e?s.open(e,"https://21.javascript.pages.academy/keksobooking/data"):"POST"===e&&s.open(e,"https://21.javascript.pages.academy/keksobooking"),s.send(o)};window.server={load:(t,n)=>{e("GET",t,n)},upload:(t,n,o)=>{e("POST",n,o,t)}}})(),(()=>{const e=document.querySelector("#pin").content.querySelector("button");window.pin={renderPin:t=>{let n=e.cloneNode(!0),o=n.querySelector("img");return o.src=t.author.avatar,o.alt=t.offer.title,n.style.left=t.location.x-window.constants.PIN_WIDTH/2+"px",n.style.top=t.location.y-window.constants.PIN_HEIGHT+"px",n},deletePins:()=>{document.querySelectorAll(".map__pin").forEach((e=>{e.contains(window.constants.PIN_HANDLE)||e.remove()}))},resetMainPin:()=>{window.constants.PIN_HANDLE.style.left=window.constants.PIN_MAIN_START.left+"px",window.constants.PIN_HANDLE.style.top=window.constants.PIN_MAIN_START.top+"px"}}})(),(()=>{const e=document.querySelector("#card").content.querySelector("article").cloneNode(!0),t=e.querySelector(".popup__photos"),n=t.querySelector(".popup__photo");window.card={popup:e,renderCard:o=>{var s,r,i;e.querySelector(".popup__title").textContent=o.offer.title,e.querySelector(".popup__text--address").textContent=o.offer.address,e.querySelector(".popup__text--price").textContent=o.offer.price+" ₽/ночь",e.querySelector(".popup__type").textContent=window.constants.TYPE_TRANSLATE[o.offer.type],r=o.offer.rooms,i=o.offer.guests,e.querySelector(".popup__text--capacity").textContent=1===r&&1===i?`${r} комната для ${i} гостя`:1===r&&i>1?`${r} комната для ${i} гостей`:r>1&&r<5&&i>1?`${r} комнаты для ${i} гостей`:r>=5&&i>1||r<1&&i<1?`${r} комнат для ${i} гостей`:r>=5&&1===i?`${r} комнат для ${i} гостя`:`${r} комнаты для ${i} гостя`,e.querySelector(".popup__text--time").textContent=`Заезд после ${o.offer.checkin}, выезд\t до ${o.offer.checkout}`,e.querySelector(".popup__description ").textContent=o.offer.description,e.querySelector(".popup__avatar").src=o.author.avatar,(t=>{const n=e.querySelector(".popup__features");n.innerHTML="";for(let e=0;e<t.length;e++)""===t[0]?n.innerHTML="":n.innerHTML+=`<li class="popup__feature popup__feature--${t[e]}"></li>`})(o.offer.features),""===(s=o.offer.photos)[0]?t.innerHTML="":(t.innerHTML="",s.forEach((e=>{const o=n.cloneNode(!0);o.src=e,t.append(o)}))),window.constants.MAP.insertBefore(e,window.constants.mapFiltersContainer)}}})(),(()=>{const e=e=>{window.constants.MAP.classList.remove("map--faded");const t=document.createDocumentFragment();for(let o of e){const e=window.pin.renderPin(o);t.appendChild(e),e.addEventListener("click",(()=>{window.card.renderCard(o),document.addEventListener("keydown",n)}))}window.constants.mapPins.appendChild(t)},t=t=>{window.dataWithId=window.util.addIdToData(t),e(window.dataWithId.slice(0,window.constants.MAX_PIN_ON_MAP))},n=e=>{"Escape"===e.key&&(e.preventDefault(),window.util.removeCard())};window.map={onPopupEscPress:n,appendPin:e,activeState:()=>{window.util.abledElement(window.util.fieldset),window.form.getRoomGuestValidation(),window.map.fillAddress(window.constants.PIN_HANDLE),window.constants.form.classList.remove("ad-form--disabled"),window.server.load(t,window.error.onError)},fillAddress:e=>{let t=e.style.left,n=e.style.top,o=document.querySelector("#address");window.constants.form.classList.contains("ad-form--disabled")?o.value=`${Math.floor(parseInt(t,10)+window.constants.PIN_WIDTH_MAIN/2)}, ${Math.floor(parseInt(n,10)+(window.constants.PIN_HEIGHT_MAIN+window.constants.PIN_HEIGHT_NEEDLE)/2)}`:e===window.constants.PIN_HANDLE?o.value=`${Math.floor(parseInt(t,10)+window.constants.PIN_WIDTH_MAIN/2)}, ${Math.floor(parseInt(n,10)+window.constants.PIN_HEIGHT_MAIN+window.constants.PIN_HEIGHT_NEEDLE)}`:o.value=`${parseInt(t,10)+window.constants.PIN_WIDTH/2}, ${parseInt(n,10)+window.constants.PIN_HEIGH}`},succsesLoad:t}})(),(()=>{const e=document.querySelector("#room_number"),t=document.querySelector("#capacity"),n=document.querySelector("#type"),o=document.querySelector("#price"),s=document.querySelector(".ad-form__reset");window.constants.form.addEventListener("submit",(e=>{e.preventDefault(),window.util.removeCard(),window.server.upload(new FormData(window.constants.form),window.succses.onSuccses,window.error.onError)})),s.addEventListener("click",(e=>{e.preventDefault(),window.util.resetForm()})),window.form={userPrice:o,typeOption:n,guestCount:t,roomCount:e,getRoomGuestValidation:()=>{let n=e.value,o=t.value;"100"===n&&"0"!==o?t.setCustomValidity("100 комнат доступно только для не гостей"):"0"===o&&"100"!==n?t.setCustomValidity("Не гостям доступно только 100 комнат"):"0"===o&&"100"===n?t.setCustomValidity(""):n<o?t.setCustomValidity("Количество гостей превышает количество комнат"):t.setCustomValidity("")},minPriceValidation:()=>{"bungalow"===n.value&&(o.placeholder=window.constants.MIN_BUNGALO_PRICE),"flat"===n.value&&(o.placeholder=window.constants.MIN_FLAT_PRICE),"house"===n.value&&(o.placeholder=window.constants.MIN_HOUSE_PRICE),"palace"===n.value&&(o.placeholder=window.constants.MIN_PALACE_PRICE)},priceValidation:()=>{const e=o.value;"bungalow"===n.value&&e<window.constants.MIN_BUNGALO_PRICE?o.setCustomValidity("Минимальная сумма: "+window.constants.MIN_BUNGALO_PRICE):"flat"===n.value&&e<window.constants.MIN_FLAT_PRICE?o.setCustomValidity("Минимальная сумма: "+window.constants.MIN_FLAT_PRICE):"house"===n.value&&e<window.constants.MIN_HOUSE_PRICE?o.setCustomValidity("Минимальная сумма: "+window.constants.MIN_HOUSE_PRICE):"palace"===n.value&&e<window.constants.MIN_PALACE_PRICE?o.setCustomValidity("Минимальная сумма: "+window.constants.MIN_PALACE_PRICE):o.setCustomValidity(""),o.reportValidity()},validTime:(e,t)=>{"12:00"===e.value&&(t.value="12:00"),"13:00"===e.value&&(t.value="13:00"),"14:00"===e.value&&(t.value="14:00")}}})(),(()=>{const e=window.constants.MAP_RANGE_TOP-window.constants.PIN_HEIGHT_MAIN-window.constants.PIN_HEIGHT_NEEDLE,t=window.constants.MAP_RANGE_BOTTOM-window.constants.PIN_HEIGHT_MAIN-window.constants.PIN_HEIGHT_NEEDLE,n=0-window.constants.PIN_WIDTH_MAIN/2,o=Math.ceil(window.constants.mapWidth-window.constants.PIN_WIDTH_MAIN/2);window.constants.PIN_HANDLE.addEventListener("mousedown",(s=>{s.preventDefault();let r={x:s.clientX,y:s.clientY};const i=s=>{s.preventDefault();let i=r.x-s.clientX,d=r.y-s.clientY;r={x:s.clientX,y:s.clientY};const a=window.constants.PIN_HANDLE.offsetTop-d,c=window.constants.PIN_HANDLE.offsetLeft-i;c>=n&&c<=o&&a>=e&&a<=t&&(window.constants.PIN_HANDLE.style.top=a+"px",window.constants.PIN_HANDLE.style.left=c+"px"),window.map.fillAddress(window.constants.PIN_HANDLE)},d=e=>{e.preventDefault(),window.map.fillAddress(window.constants.PIN_HANDLE),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",d)}))})(),window.debounce={getDebounce:e=>{let t=null;return(...n)=>{t&&window.clearTimeout(t),t=window.setTimeout((()=>{e(...n)}),window.constants.DEBOUNCE_INTERVAL)}}},(()=>{const e=document.querySelector(".map__filters"),t=e.querySelector("#housing-type"),n=e.querySelector("#housing-price"),o=e.querySelector("#housing-rooms"),s=e.querySelector("#housing-guests"),r="any",i=e=>{const n=t.value;return n===r||n===e.offer.type},d=e=>{switch(n.value){case r:return!0;case window.constants.PRICE_VALUE.low:if(e.offer.price<window.constants.MAX_PRICE.min)return!0;break;case window.constants.PRICE_VALUE.middle:if(e.offer.price>=window.constants.MAX_PRICE.min&&e.offer.price<=window.constants.MAX_PRICE.max)return!0;break;case window.constants.PRICE_VALUE.high:if(e.offer.price>window.constants.MAX_PRICE.max)return!0}return!1},a=e=>{const t=o.value;return t===r||parseInt(t,10)===e.offer.rooms},c=e=>{const t=s.value;return t===r||parseInt(t,10)===e.offer.guests},w=t=>{const n=Array.from(e.querySelectorAll(".map__checkbox:checked"));for(let e of n)if(!t.offer.features.includes(e.value))return!1;return!0};e.addEventListener("change",(()=>{window.util.removeCard(),window.pin.deletePins(),window.debounce.getDebounce(window.map.appendPin((e=>{const t=[];for(let n=0;n<e.length;n++)i(e[n])&&d(e[n])&&a(e[n])&&c(e[n])&&w(e[n])&&t.push(e[n]);return t})(window.dataWithId).splice(0,window.constants.MAX_PIN_ON_MAP)))}))})(),(()=>{const e=document.querySelector(".ad-form__field input[type=file]"),t=document.querySelector(".ad-form-header__preview > img"),n=document.querySelector(".ad-form__upload input[type=file]"),o=document.querySelector(".ad-form__photo"),s=(e,t)=>{let n=e.files[0];const o=n.name.toLowerCase();if(window.constants.FILE_TYPES.some((e=>o.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{t.src=e.result})),e.readAsDataURL(n)}};e.addEventListener("change",(()=>{s(e,t)})),n.addEventListener("change",(()=>{if(!o.querySelector("img")){const e=document.createElement("img");e.style.width="100%",e.style.height="100%",e.alt="Фотография жилья",o.appendChild(e)}const e=document.querySelector(".ad-form__photo > img");s(n,e)}))})(),(()=>{const e=window.card.popup.querySelector(".popup__close"),t=document.querySelector("#timein"),n=document.querySelector("#timeout");e.addEventListener("click",(()=>{window.util.removeCard(),document.removeEventListener("keydown",window.map.onPopupEscPress)})),window.util.disabledState(),window.constants.PIN_HANDLE.addEventListener("mousedown",(e=>{e.preventDefault(),window.constants.MAP.classList.contains("map--faded")&&window.map.activeState()})),window.constants.PIN_HANDLE.addEventListener("keydown",(e=>{"Enter"===e.key&&window.map.activeState()})),window.form.typeOption.addEventListener("change",(()=>{window.form.minPriceValidation()})),window.form.userPrice.addEventListener("change",(()=>{window.form.priceValidation()})),t.addEventListener("change",(()=>{window.form.validTime(t,n)})),n.addEventListener("change",(()=>{window.form.validTime(n,t)})),window.form.roomCount.addEventListener("change",window.form.getRoomGuestValidation),window.form.guestCount.addEventListener("change",window.form.getRoomGuestValidation)})()})();