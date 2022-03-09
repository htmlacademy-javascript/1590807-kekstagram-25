import {createPhotoDescriptions} from './data.js';

const picturesList = document.querySelector('.pictures ');
const rndUsrPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const rndUsrPicture = createPhotoDescriptions();

const rndPictureFragment = document.createDocumentFragment();

rndUsrPicture.forEach((url, likes, comments) => {
  const usrPictureElement = rndUsrPictureTemplate.cloneNode(true);
  usrPictureElement.querySelector('.picture__img').src = url;
  usrPictureElement.querySelector('.picture__likes').textContent = likes;
  usrPictureElement.querySelector('.picture__comments').textContent = comments;
  rndPictureFragment.appendChild(usrPictureElement);
});


picturesList.appendChild(rndPictureFragment);
