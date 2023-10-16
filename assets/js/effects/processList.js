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