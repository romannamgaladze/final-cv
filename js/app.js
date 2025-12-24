const burgerMenu = document.querySelector(".menu-icon");
const nav = document.querySelector("header nav");

burgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("nav-active");
});

const navLinks = document.querySelectorAll(".header-li-items a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-active");
  });
});

function initSlider() {
  const slides = document.querySelectorAll(".slider-img");
  let currentSlide = 0;
  const slideInterval = 5000;
  if (slides.length === 0) return;

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  setInterval(nextSlide, slideInterval);
}
initSlider();
