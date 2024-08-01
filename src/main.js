import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGalleryMarkup } from './js/render-functions';
import { getImagesByUserSearch } from './js/pixabay-api';

const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', submitSearchHandler);
const gallery = document.querySelector('ul.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-button');
loadMoreBtn.addEventListener('click', loadMoreHandler);
let page;
const perPage = 15;
let searchText;
let totalPages;

async function submitSearchHandler(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  page = 1;
  loader.classList.remove('hidden');
  loadMoreBtn.classList.add('hidden');
  searchText = event.target.elements.search.value.trim().toLowerCase();

  if (searchText === '') {
    loader.classList.add('hidden');
    event.currentTarget.reset();
    return;
  }

  try {
    const pictures = await getImagesByUserSearch(searchText, page, perPage);
    totalPages = Math.ceil(pictures.totalHits / perPage);
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
    createGalleryMarkup(pictures.hits);

    page += 1;
    loadMoreBtn.classList.remove('hidden');

    // if (page > 1) {
    //   loadMoreBtn.classList.remove('hidden');
    // }
  } catch (error) {
    console.log(error);
  } finally {
    event.target.reset();
    loader.classList.add('hidden');
  }
}

async function loadMoreHandler(event) {
  loadMoreBtn.classList.add('hidden');
  loader.classList.remove('hidden');
  page += 1;

  try {
    const pictures = await getImagesByUserSearch(searchText, page, perPage);
    createGalleryMarkup(pictures.hits);
  } catch (error) {
    iziToast.error({
      message: `Request failed with: ${error}`,
      position: 'topRight',
      timeout: 2000,
      icon: '',
    });
  } finally {
    loader.classList.add('hidden');
    const galleryItemHeight = document
      .querySelector('.gallery-item')
      .getBoundingClientRect().height;

    window.scrollBy({
      top: galleryItemHeight * 2,
      left: 0,
      behavior: 'smooth',
    });
    if (page === totalPages) {
      loadMoreBtn.classList.add('hidden');
      iziToast.info({
        message: 'We`re sorry, but you`ve reached the end of search results.',
        position: 'topRight',
        timeout: 2000,
        icon: '',
      });
      loadMoreBtn.removeEventListener('click', loadMoreHandler);
    } else {
      loadMoreBtn.classList.remove('hidden');
    }
  }
}

//TODO:
// 1. REFACTOOOR
