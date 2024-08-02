import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGalleryMarkup } from './js/render-functions';
import { getImagesByUserSearch } from './js/pixabay-api';

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('ul.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-button'),
};

refs.searchForm.addEventListener('submit', submitSearchHandler);
const queryParams = {
  perPage: 15,
  page: 1,
  searchText: '',
  totalPages: 0,
};

async function submitSearchHandler(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  queryParams.page = 1;
  refs.loader.classList.remove('hidden');
  refs.loadMoreBtn.classList.add('hidden');
  queryParams.searchText = event.target.elements.search.value
    .trim()
    .toLowerCase();

  if (!queryParams.searchText) {
    refs.loader.classList.add('hidden');
    iziToast.info({
      message: 'Please enter search text!',
      position: 'topRight',
      timeout: 2000,
    });
    event.currentTarget.reset();
    return;
  }

  try {
    const pictures = await getImagesByUserSearch(queryParams);
    createGalleryMarkup(pictures.hits);

    if (pictures.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 2000,
        icon: '',
      });
      return;
    }

    queryParams.totalPages = Math.ceil(
      pictures.totalHits / queryParams.perPage
    );

    if (queryParams.totalPages > 1) {
      refs.loadMoreBtn.classList.remove('hidden');
      refs.loadMoreBtn.addEventListener('click', loadMoreHandler);
    } else {
      refs.loadMoreBtn.classList.add('hidden');
    }
  } catch (error) {
    iziToast.error({
      message: `Request failed with: ${error}`,
      position: 'topRight',
      timeout: 2000,
    });
  } finally {
    event.target.reset();
    refs.loader.classList.add('hidden');
  }
}

async function loadMoreHandler(event) {
  refs.loadMoreBtn.classList.add('hidden');
  refs.loader.classList.remove('hidden');

  try {
    const pictures = await getImagesByUserSearch(queryParams);
    createGalleryMarkup(pictures.hits);
    queryParams.page += 1;
  } catch (error) {
    iziToast.error({
      message: `Request failed with: ${error}`,
      position: 'topRight',
      timeout: 2000,
    });
  } finally {
    refs.loader.classList.add('hidden');
    const galleryItemHeight = document
      .querySelector('.gallery-item')
      .getBoundingClientRect().height;

    window.scrollBy({
      top: galleryItemHeight * 2,
      left: 0,
      behavior: 'smooth',
    });

    if (queryParams.page === queryParams.totalPages) {
      refs.loadMoreBtn.classList.add('hidden');
      iziToast.info({
        message: 'We`re sorry, but you`ve reached the end of search results.',
        position: 'topRight',
        timeout: 2000,
        icon: '',
      });
      refs.loadMoreBtn.removeEventListener('click', loadMoreHandler);
    } else {
      refs.loadMoreBtn.classList.remove('hidden');
    }
  }
}
