import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGalleryMarkup } from './js/render-functions';
import { getImagesByUserSearch } from './js/pixabay-api';

const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', submitSearchHandler);

const loader = document.querySelector('.loader');
let searchResult;

function submitSearchHandler(event) {
  event.preventDefault();
  loader.classList.remove('hidden');
  const searchText = event.target.elements.search.value.trim().toLowerCase();
  if (!searchText) {
    loader.classList.add('hidden');
  } else {
    getImagesByUserSearch(searchText)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            timeout: 2000,
            icon: '',
          });
        }
        createGalleryMarkup(data.hits);
      })
      .catch(error => console.log(error))
      .finally(() => {
        event.target.reset();
        loader.classList.add('hidden');
      });
  }
}
