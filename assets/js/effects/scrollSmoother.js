const sectionLinks = document.querySelectorAll('.section-link');

sectionLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    // défile vers la section correspondante en utilisant l'index de l'élément cliqué
    const targetSection = document.querySelectorAll('.section')[index];
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});