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



// skills sticky scroll ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

window.addEventListener("resize", handleWindowResize2);
handleWindowResize2();