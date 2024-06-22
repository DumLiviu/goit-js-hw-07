import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulElements = document.querySelector(".gallery");

galleryItems.forEach((element) => {
  const liElements = document.createElement("li");
  liElements.classList.add("gallery__item");
  liElements.innerHTML = `<a class='gallery__link' 
  href='${element.original}'>
  <img class="gallery__image"
  src='${element.preview}'
  data-source='${element.original}'
  alt='${element.description}' />
  </a>
  `;
  ulElements.append(liElements);
});
ulElements.addEventListener("click", imageView);

function imageView(e) {
  const clicked = e.target;
  e.preventDefault();
  if (clicked.nodeName !== "IMG") {
    return;
  }
  basicLightbox
    .create(`<img width="1400" height="900" src="${clicked.dataset.source} ">`)
    .show();
}
