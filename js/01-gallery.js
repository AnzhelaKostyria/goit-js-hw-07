import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item">
  <a class="gallery__link" href=${galleryItem.original}>
    <img
      class="gallery__image"
      src=${galleryItem.preview}
      data-source= ${galleryItem.original}
      alt="Image description"
    />
  </a>
</li>`
  )
  .join("");
gallery.innerHTML = markup;

gallery.addEventListener("click", showImage);
function showImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    let urlOriginalImage;
    urlOriginalImage = event.target.dataset.source;
    console.log(urlOriginalImage);
    const instance = basicLightbox.create(`

     <img src="${urlOriginalImage}">
     
    `);
    instance.show();
    window.addEventListener("keydown", closeByEsc);
    function closeByEsc({ code }) {
      if (code === "Escape") {
        instance.close();
      }
    }
  }
}
