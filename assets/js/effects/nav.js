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