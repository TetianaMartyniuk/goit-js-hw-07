import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryMarkUp = galleryItems.map((item) => {
    const markUp = `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
            <img class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
             /> </a>
            </div>`;
    return markUp;
}).join("");
gallery.insertAdjacentHTML('beforeend', galleryMarkUp);


gallery.addEventListener("click", openPicture)

function openPicture(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return
    }

    const instance = basicLightbox.create(
            `<img src="${event.target.dataset.source}" width="800px" />`
            , {
                closable: true,
                onShow: () => {
                    document.addEventListener("keydown", onEscape)
                },
                onClose: () => {
                }
            }
        );
    instance.show()
        
        function onEscape(event) {
            console.log(event.key);
            if (event.key === "Escape") {
                instance.close()
                document.removeEventListener("keydown", onEscape)
            }
        }
    
}



// function modalOpen(event) {
//     event.preventDefault();
//     console.log(event.target)
//     if (!event.target.classList.contains("gallery__image")) {
//         return
//     }
//     // image.classList.add("open")
//     // image.classList.remove("open")
// }
// gallery.addEventListener("click", modalOpen)

// `<div class="modal"><img class="image__modal" src="${event.target.dataset.source}" /></div>`


