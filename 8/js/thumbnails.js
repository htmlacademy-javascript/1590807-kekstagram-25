const picturesList = document.querySelector('.pictures');
const rndUsrPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderUsersPictures = (rndUsrPictures) => {
  const rndPictureFragment = document.createDocumentFragment();
  rndUsrPictures.forEach(({url, likes, comments}) => {
    const usrPictureElement = rndUsrPictureTemplate.cloneNode(true);
    usrPictureElement.querySelector('.picture__img').src = url;
    usrPictureElement.querySelector('.picture__likes').textContent = likes;
    usrPictureElement.querySelector('.picture__comments').textContent = comments.message;
    rndPictureFragment.appendChild(usrPictureElement);
  });
  picturesList.appendChild(rndPictureFragment);
};

export {renderUsersPictures};
