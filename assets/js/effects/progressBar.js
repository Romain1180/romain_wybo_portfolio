const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const newY = scrollPercentage + '%';
    progressBar.style.width = newY; 
});
window.dispatchEvent(new Event('scroll'));