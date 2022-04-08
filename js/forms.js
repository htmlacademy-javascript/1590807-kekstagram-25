import { isEscapeKey } from './util.js';
const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFileForm = document.querySelector('#upload-file');
const imageEditorForm = document.querySelector('.img-upload__overlay');
const uploadCancelBtn = document.querySelector('#upload-cancel');

const downScaleBtn = imageEditorForm.querySelector('.scale__control--smaller');
const upScaleBtn = imageEditorForm.querySelector('.scale__control--bigger');
const scaleCtrlValue = imageEditorForm.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview');

const imgFilters = imageEditorForm.querySelectorAll('.effects__radio');
const filtersList = imageEditorForm.querySelector('.effects__list');

const alertSuccess = document.querySelector('#success').content.cloneNode(true);
const alertError = document.querySelector('#error').content.cloneNode(true);


const closeLoadForm = () => {
  imageEditorForm.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFileForm.value = '';
};

const openLoadForm = () => {
  imageEditorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  uploadCancelBtn.addEventListener('click', () => {
    closeLoadForm();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeLoadForm();
    }
  });
  let scaleNumber = Number(scaleCtrlValue.value.slice(0, -1));
  downScaleBtn.addEventListener('click', () => {
    if(scaleNumber > 25) {
      scaleNumber -= 25;
      scaleCtrlValue.value = `${scaleNumber}%`;
      imageUploadPreview.style.transform = `scale(${scaleNumber / 100})`;
    }
  });
  upScaleBtn.addEventListener('click', () => {
    if(scaleNumber < 100) {
      scaleNumber += 25;
      scaleCtrlValue.value = `${scaleNumber}%`;
      imageUploadPreview.style.transform = `scale(${scaleNumber / 100})`;
    }
  });
  filtersList.addEventListener('click', () => {
    for (const filter of imgFilters) {
      if(filter.checked === true) {
        imageUploadPreview.classList.add(`effects__preview--${filter.value}`);
      } else {imageUploadPreview.classList.remove(`effects__preview--${filter.value}`);}
    }
  });
};

//Сообщения об успешной загрузке

const showAlertSuccess = () => {
  body.append(alertSuccess);
  const successBtn = document.querySelector('.success__button');
  const successPopup = document.querySelector('.success');
  document.addEventListener('click', (evt) => {
    if(evt.target.className !== '.success') {
      successPopup.remove();
    }
  });
  successBtn.addEventListener('click', () => {
    successPopup.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      successPopup.remove();
    }
  });
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
};
//Сообщение о неудачной загрузке

const showAlertError = () => {
  body.append(alertError);
  const errorBtn = document.querySelector('.error__button');
  const errorPopup = document.querySelector('.error');
  document.addEventListener('click', (evt) => {
    if(evt.target.className !== '.error') {
      errorPopup.remove();
    }
  });
  errorBtn.addEventListener('click', () => {
    errorPopup.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      errorPopup.remove();
    }
  });

  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
};

const setUsrFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      'https://25.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    ) .then ((response) => {
      if(response.ok) {
        onSuccess();
        showAlertSuccess();
      } else {
        showAlertError();
      }
    })
      .catch(() => {
        showAlertError();
      });
  });
  document.querySelector('.text__hashtags').textContent = '';
  document.querySelector('.text__description').textContent = '';
};

uploadFileForm.addEventListener('change', openLoadForm);

const uploadPhoto = () => {uploadFileForm.addEventListener('change', openLoadForm);};
export {uploadPhoto, closeLoadForm, setUsrFormSubmit};


