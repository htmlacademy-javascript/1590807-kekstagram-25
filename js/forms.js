import { isEscapeKey } from './util.js';
const body = document.querySelector('body');
const uploadFileForm = document.querySelector('#upload-file');
const imageEditorForm = document.querySelector('.img-upload__overlay');
const uploadCancelBtn = document.querySelector('#upload-cancel');
//const isEscapeKey = (evt) => evt.key ==='Escape';

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
};

uploadFileForm.addEventListener('change', openLoadForm);

const uploadPhoto = () => {uploadFileForm.addEventListener('change', openLoadForm);};
export {uploadPhoto};


