// cursor -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const targetX = cursorX - cursor.offsetWidth / 2;
    const targetY = cursorY - cursor.offsetHeight / 2;

    // Limiter targetY pour qu'il reste dans les limites de la fenêtre
    const minY = 0;
    const maxY = window.innerHeight - cursor.offsetHeight;
    const clampedY = Math.min(maxY, Math.max(minY, targetY));

    cursor.style.transform = `translate(${targetX}px, ${clampedY}px)`;
});

// hour -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function afficherHeure() {
  // Créez un nouvel objet Date
  let date = new Date();
  let heures = date.getHours();
  let minutes = date.getMinutes();
  let secondes = date.getSeconds();
  let heureCourante = heures + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (secondes < 10 ? "0" : "") + secondes;
  let divHeure = document.querySelector(".hour");

  divHeure.textContent = heureCourante;
}
afficherHeure();

setInterval(afficherHeure, 1000);

// navbar ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const menuBurger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");

menuBurger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu');
});

// close effect menu burger ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const closeBurger = document.querySelector('.menu-burger');
closeBurger.addEventListener('click', function() {
  menuBurger.classList.toggle('opened');
})


// scroll to section ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function scrollToSection1() {
  const targetSection = document.querySelectorAll('.section')[0];
  targetSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection2() {
  const targetSection = document.querySelectorAll('.section')[1];
  targetSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection3() {
  const targetSection = document.querySelectorAll('.section')[2];
  targetSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection4() {
  const targetSection = document.querySelectorAll('.section')[3];
  targetSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection5() {
  const targetSection = document.querySelectorAll('.section')[4];
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

// progress bar ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const newY = scrollPercentage + '%';
    progressBar.style.width = newY; 
});
window.dispatchEvent(new Event('scroll'));


// sticky scroll section ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const stikySections = document.querySelectorAll('.sticky');

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stikySections.length; i++){
    transform(stikySections[i])
  }
})

function transform(section){
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.scroll_section');
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  
  percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
}

// responsive sticky scroll secttion 
function handleWindowResize1() {
  let element = document.querySelector(".scroll_section");
  if (window.innerWidth <= 900) {
    element.classList.remove("scroll_section");
  } else {
    element.classList.add("scroll_section");
  }
}
window.addEventListener("resize", handleWindowResize1);
handleWindowResize1();


// scale img ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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


// process text ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const processContent = document.querySelector('.process-content');
const lines = processContent.querySelectorAll('.line h2');
let hasStarted = false; 

// Fonction pour animer les lignes une par une
function animateLines() {
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, index * 300); 
    });
}

// Fonction pour réinitialiser les lignes avec un délai
function resetLinesWithDelay() {
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '0';
            line.style.transform = 'translateY(-100px)';
        }, index * 300); 
    });
}

const observerOptions = {
    root: null, // Utilise la viewport par défaut
    rootMargin: '0px',
    threshold: 0.5, 
};

// Fonction de gestionnaire d'intersection
function handleIntersection(entries) {
    const entry = entries[0];
    if (entry.isIntersecting) {
        if (!hasStarted) {
            hasStarted = true; 
            animateLines(); 
        }
    } else {
        hasStarted = false; // Réinitialiser l'effet lorsque la section sort de la vue
        resetLinesWithDelay(); // Réinitialiser les lignes avec un délai
    }
}

// Créer un Intersection Observer en utilisant la fonction de gestionnaire
const observer = new IntersectionObserver(handleIntersection, observerOptions);
observer.observe(processContent);



// sticky scroll section 2 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const stikySections2 = document.querySelectorAll('.sticky_2');

window.addEventListener('scroll', (e) => {
  for (let i = 0; i < stikySections2.length; i++) {
    transformSection2(stikySections2[i])
  }
})

function transformSection2(section2) {
  const offsetTop = section2.parentElement.offsetTop;
  const scrollSection2 = section2.querySelector('.scroll_section_2');
  let percentage2 = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

  percentage2 = percentage2 < 0 ? 0 : percentage2 > 170 ? 170 : percentage2;
  scrollSection2.style.transform = `translate3d(${-(percentage2)}vw, 0, 0)`;
}
// responsive sticky scroll section 2
function handleWindowResize2() {
  let element2 = document.querySelector(".scroll_section_2");
  if (window.innerWidth <= 900) {
    element2.classList.remove("scroll_section_2");
  } else {
    element2.classList.add("scroll_section_2");
  }
}

// Ajouter un écouteur d'événement pour le changement de taille de la fenêtre
window.addEventListener("resize", handleWindowResize2);
handleWindowResize2();



// scale tilte projet ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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


// contact & link ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const cursorLink = document.querySelector('.custom-cursor');
let contact1 = document.querySelector('.contact-1');
let contact2 = document.querySelector('.contact-2');
let contact3 = document.querySelector('.contact-3 ');
let contactLink2 = document.querySelector('.contact-2 a');
let contactLink3 = document.querySelector('.contact-3 a');

contact1.addEventListener('mouseover', () => {
  contact1.style.color = '#010101';
  cursorLink.style.backgroundColor = '#010101';
})
contact1.addEventListener('mouseout', () => {
  contact1.style.color = '#C6C6C6';
  cursorLink.style.backgroundColor = '#C6C6C6';
})

contact2.addEventListener('mouseover', () => {
  contactLink2.style.color = '#010101';
  cursorLink.style.backgroundColor = '#010101';
})
contact2.addEventListener('mouseout', () => {
  contactLink2.style.color = '#C6C6C6';
  cursorLink.style.backgroundColor = '#C6C6C6';
})

contact3.addEventListener('mouseover', () => {
  contactLink3.style.color = '#010101';
  cursorLink.style.backgroundColor = '#010101';
})
contact3.addEventListener('mouseout', () => {
  contactLink3.style.color = '#C6C6C6';
  cursorLink.style.backgroundColor = '#C6C6C6';
})