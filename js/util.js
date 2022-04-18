/* eslint-disable no-console */
const ALERT_SHOW_TIME = 5000;
//1.Функция, возвращающая случайное целое число из переданного диапазона включительно (использован ресурс developer.mozilla.org).

const getRandomInt = (min, max) => {
  if (min < 0 || max <= 0 || max <= min){
    console.log ('Введите корректные данные!');
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min + 1;
  }
};
getRandomInt(0, 100);

//Функция для проверки максимальной длины строки.

const checkStringLength = (userString, maxLength) => userString.length <= maxLength;

checkStringLength('Hello', 140);

//Функция выбора рандомного элемента из массива.

const getRandomArrayElement = (elements) => elements [getRandomInt(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key ==='Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKey};
export{getRandomInt};
export{getRandomArrayElement, showAlert};

