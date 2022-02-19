/* eslint-disable no-console */
//1.Функция, возвращающая случайное целое число из переданного диапазона включительно (использован ресурс developer.mozilla.org).

function getRandomInt(min, max) {
  if (min < 0 || max <= 0 || max <= min){
    console.log ('Введите корректные данные!');
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
}
getRandomInt(0, 100);

//Функция для проверки максимальной длины строки.

function checkStringLength(userString, maxLength) {
  const userInput = userString.value;
  if(userInput.length <= maxLength){
    return true;
  } else {
    return false;
  }
}
checkStringLength(23, 140);
