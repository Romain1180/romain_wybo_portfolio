let projetsTitle = document.querySelector('.projets-title');
let isElementVisible = false; // Variable pour suivre l'état précédent de l'élément

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.bottom <= 0 || // L'élément est complètement en haut de la fenêtre
    rect.top >= window.innerHeight // L'élément est complètement en bas de la fenêtre
  );
}

function moveElementUpIfVisible() {
  const elementInViewport = isElementInViewport(projetsTitle);

  if (elementInViewport && isElementVisible) {
    // Si l'élément est complètement sorti de la vue en bas et était visible précédemment
    projetsTitle.style.transform = 'translateY(210px)';
    isElementVisible = false;
  } else if (!elementInViewport && !isElementVisible) {
    // Si l'élément n'est pas complètement sorti de la vue en bas et n'était pas visible précédemment
    projetsTitle.style.transform = 'translateY(0px)';
    isElementVisible = true;
  }
}
window.addEventListener('scroll', moveElementUpIfVisible);