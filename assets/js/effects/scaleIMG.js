window.addEventListener('scroll', function() {
    const image = document.querySelector('.profile-picture');
    const scrollY = window.scrollY;
  
    const maxSize = 250; 
  
    let newSize = 20 + scrollY * 0.30;
  
    // Limiter la taille maximale
    if (newSize > maxSize) {
      newSize = maxSize;
    }
  
    image.style.transform = `scale(${newSize / 250})`;
  });