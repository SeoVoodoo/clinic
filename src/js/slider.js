document.ready(function(){
    const jsgallery = document.querySelector('.js-gallery');
    jsgallery.slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<span class="gallery-arrow mod-prev">Prev</span>',
      nextArrow: '<span class="gallery-arrow mod-next">Next</span>'
    });
    
    jsgallery.slickLightbox({
      src: 'src',
      itemSelector: '.js-gallery-popup img',
      background: 'rgba(0, 0, 0, .7)'
    });
  });