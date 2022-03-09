import { getRandomInt } from './util.js';
import { getRandomArrayElement } from './util.js';

const COMMENTS_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const USERS_NAMES = [
  'Артём',
  'Борис',
  'Виктор',
  'Геннадий',
  'Дмитрий',
  'Елена',
];

const commentsArr = [];

const createComments = () => {
  for (let i = 0; i < getRandomInt(1, 20); i++){
    commentsArr.push({
      id: i+1,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENTS_TEXT),
      name: getRandomArrayElement(USERS_NAMES),
    });
  }
  return commentsArr;
};

const photoDescriptions = [];

const createPhotoDescriptions = () => {
  for (let i = 0; i < 25; i++) {
    photoDescriptions.push({
      id: i+1,
      url: `photos/${i+1}.jpg`,
      description: `Фото №  ${i+1}`,
      likes: getRandomInt(15, 200),
      comments: createComments,
    });
  }
  return photoDescriptions;
};
export {createPhotoDescriptions};
