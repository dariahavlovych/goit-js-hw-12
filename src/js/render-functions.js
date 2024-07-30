import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('ul.gallery');
const galleryModal = new SimpleLightbox('.gallery-item a', {
  className: 'js-lightbox',
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGalleryMarkup(dataObj) {
  const markup = dataObj
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
  gallery.insertAdjacentHTML('beforeend', markup);
  galleryModal.refresh();
}
