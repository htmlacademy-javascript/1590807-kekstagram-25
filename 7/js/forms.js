import { isEscapeKey } from './util.js';
const body = document.querySelector('body');
const uploadFileForm = document.querySelector('#upload-file');
const imageEditorForm = document.querySelector('.img-upload__overlay');
const uploadCancelBtn = document.querySelector('#upload-cancel');

const downScaleBtn = imageEditorForm.querySelector('.scale__control--smaller');
const upScaleBtn = imageEditorForm.querySelector('.scale__control--bigger');
const scaleCtrlValue = imageEditorForm.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview');

const imgFilters = imageEditorForm.querySelectorAll('.effects__radio');
const filtersList = imageEditorForm.querySelector('.effects__list');

const openLoadForm = () => {
  imageEditorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  uploadCancelBtn.addEventListener('click', () => {
    imageEditorForm.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadFileForm.value = '';
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      imageEditorForm.classList.add('hidden');
      body.classList.remove('modal-open');
      uploadFileForm.value = '';
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

uploadFileForm.addEventListener('change', openLoadForm);

const uploadPhoto = () => {uploadFileForm.addEventListener('change', openLoadForm);};
export {uploadPhoto};


