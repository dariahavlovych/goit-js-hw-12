// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('ul.gallery');

export function createGalleryMarkup(dataObj) {
  gallery.innerHTML = dataObj
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img
			class="gallery-image"
			src="${webformatURL}"
			alt="${tags}"
			/>
    <div class="image-stats">
  <p>Likes </br> ${likes}</p>
  <p> Views </br> ${views}</p>
  <p>Comments </br> ${comments}</p>
  <p>Dowloads </br> ${downloads}</p>
</div>
	</a>
</li>`
    )
    .join('');

  const galleryModal = new SimpleLightbox('.gallery-item a', {
    className: 'js-lightbox',
    overlayOpacity: 0.8,
    captionsData: 'alt',
    captionDelay: 250,
  });
  galleryModal.refresh();
}
