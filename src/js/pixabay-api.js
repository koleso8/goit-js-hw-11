import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderImg } from './render-functions';

import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

export function searchImages(value) {
  const form = document.querySelector('.form');
  form.insertAdjacentHTML('afterend', '<div id="loader" class="loader"></div>');
  const params = new URLSearchParams({
    key: '44959261-ea439a2adbf8f7e5770dfe1a3',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 20,
  });
  const baseUrl = 'https://pixabay.com/api/';
  return fetch(`${baseUrl}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
