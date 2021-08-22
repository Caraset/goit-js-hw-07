import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  itemsList: document.querySelector('.gallery'),
};

function makeGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join('');
}

refs.itemsList.innerHTML = makeGalleryItems(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  showCounter: false,
  disableScroll: false,
  captionsData: 'alt',
  captionDelay: 250,
});

refs.itemsList.addEventListener('click', onImgClick);

function onImgClick(evt) {
  evt.preventDefault();

  gallery.open('.gallery');
}
