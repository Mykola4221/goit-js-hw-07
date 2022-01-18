  import { galleryItems } from './gallery-items.js';


    const myGallery = document.querySelector('.gallery');
    const gallery = myGalleryMurkup(galleryItems);

    myGallery.insertAdjacentHTML('beforeend', gallery);
    console.log(myGallery)

  function myGalleryMurkup(galleryItems) {
    const murkupGallery = galleryItems.map(({preview, original,description}) => {
      return `<div class = "gallery__item">
              <a class = "gallery__link" href =  "${ preview}" >
              <img class = "gallery__image" src = '${ original}'
                data-source = '${ original}'
                alt = ${description} />
              </a>
              </div>`;
            }).join(' ');

    return murkupGallery;
     }

     myGallery.addEventListener('click', clickPreview);


     function clickPreview(evt) {
       evt.preventDefault();
       if (!evt.target.classList.contains('gallery__image')) {return;}
        console.log(evt.target);

        let src = galleryItems.map(({src}) => {
          return `
                  <img class = "gallery__image"
                    data-source = '${src}'
                     `;
                }).join(' ');

      let instance = basicLightbox.create(`
          <div class = "modal">
           <img src = '${ evt.target.src}' width="800" height="600"/>
           </div>


     `).show();
      


     document.addEventListener('keydown', function(evt) {
    if (evt.code === 'Escape') {    //ваша функция закрытия окна
        document.querySelector('.modal').style.display = "none";  

    }
  })
      }
