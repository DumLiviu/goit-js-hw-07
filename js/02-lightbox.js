import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulElement =
  document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const liItems = document.createElement("li");
  liItems.classList.add("gallery__item");
  liItems.innerHTML = `<a class="gallery__link" href='${item.original}'>
    <img class="gallery__image" src='${item.preview}' alt='${item.description}' />
    </a>`;
  ulElement.append(liItems);
});

const lightbox = new SimpleLightbox(
  ".gallery a",
  {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  }
);
