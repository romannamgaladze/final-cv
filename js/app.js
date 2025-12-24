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

const skillsSection = document.querySelector(".skill-list");
const progressFills = document.querySelectorAll(".progress-fill");
const progressThumbs = document.querySelectorAll(".progress-thumb");

function animateSkills() {
  progressFills.forEach((fill) => {
    fill.style.width = fill.getAttribute("data-width");
  });
  progressThumbs.forEach((thumb) => {
    thumb.style.left = thumb.getAttribute("data-width");
  });
}
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkills();
        skillsObserver.disconnect();
      }
    });
  },
  { threshold: 0.5 }
);
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category") === filterValue
      ) {
        card.classList.remove("hide");
        card.classList.add("show");
      } else {
        card.classList.add("hide");
        card.classList.remove("show");
      }
    });
  });
});

const imgEl = document.getElementById("testi-img");
const textEl = document.getElementById("testi-text");
const nameEl = document.getElementById("testi-name");
const jobEl = document.getElementById("testi-job");
const dots = document.querySelectorAll(".dot");
const cardEl = document.querySelector(".testimonial-card");

function changeTestimonial(index) {
  const data = testimonials[index];
  imgEl.src = data.img;
  textEl.innerText = data.text;
  nameEl.innerText = data.name;
  jobEl.innerText = data.job;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");

  cardEl.classList.remove("slide-right");
  void cardEl.offsetWidth;
  cardEl.classList.add("slide-right");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    changeTestimonial(index);
  });
});
