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