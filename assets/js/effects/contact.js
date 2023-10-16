let contact1 = document.querySelector('.contact-1');
let contact2 = document.querySelector('.contact-2');
let contact3 = document.querySelector('.contact-3 ');
let contactLink2 = document.querySelector('.contact-2 a');
let contactLink3 = document.querySelector('.contact-3 a');

contact1.addEventListener('mouseover', () => {
  contact1.style.color = '#010101';
  // cursorLink.style.backgroundColor = '#010101';
})
contact1.addEventListener('mouseout', () => {
  contact1.style.color = '#C6C6C6';
  // cursorLink.style.backgroundColor = '#C6C6C6';
})

contact2.addEventListener('mouseover', () => {
  contactLink2.style.color = '#010101';
  // cursorLink.style.backgroundColor = '#010101';
})
contact2.addEventListener('mouseout', () => {
  contactLink2.style.color = '#C6C6C6';
  // cursorLink.style.backgroundColor = '#C6C6C6';
})

contact3.addEventListener('mouseover', () => {
  contactLink3.style.color = '#010101';
  // cursorLink.style.backgroundColor = '#010101';
})
contact3.addEventListener('mouseout', () => {
  contactLink3.style.color = '#C6C6C6';
  // cursorLink.style.backgroundColor = '#C6C6C6';
})
