import {renderUsersPictures} from './thumbnails.js';
import {setUsrFormSubmit, closeLoadForm} from './forms.js';

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((usrsPicturesList) => {
    renderUsersPictures(usrsPicturesList);
  });

setUsrFormSubmit(closeLoadForm);


