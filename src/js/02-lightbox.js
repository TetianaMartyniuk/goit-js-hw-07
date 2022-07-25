import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryMarkUp = galleryItems.map((item) => {
    const markUp = `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
    return markUp;
}).join("");
gallery.insertAdjacentHTML('beforeend', galleryMarkUp);
// console.log(galleryItems);

const image = document.querySelectorAll(".gallery__image")
// console.dir(image);

const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "outside",
    captionDelay: 250,
});
console.dir(lightbox);
