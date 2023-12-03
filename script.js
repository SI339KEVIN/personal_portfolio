document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-images img');
    const numberOfImages = images.length;
    const carouselImages = document.querySelector('.carousel-images');
  
    // Set a CSS variable to determine the animation distance
    carouselImages.style.setProperty('--number-of-images', numberOfImages);
  
    // make carousel go backwards to the first image after the last image
    let counter = 1;
    setInterval(() => {
      carouselImages.style.setProperty('--image-index', counter);
      counter++;
      if (counter === numberOfImages) {
        counter = 1;
      }
    }, 5000);
    
  });
  