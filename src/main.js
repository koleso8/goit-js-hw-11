import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api';

const refs = {
  btnSubEl: document.querySelector('.btn-search'),
  formEl: document.querySelector('.form'),
  input: document.querySelector('input'),
};

refs.formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  if (refs.input.value.trim()) {
    searchImages(refs.input.value.trim());
    refs.input.value = '';

    document.body.insertAdjacentHTML(
      'beforeend',
      '<div id="loader" class="loader" ></div>',
    );
  } else {
    iziToast.error({
      message: 'Please fill in the input field',
      position: 'topRight',
    });
  }
});
