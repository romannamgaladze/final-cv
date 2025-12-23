const burgerMenu = document.querySelector(".menu-icon");
const nav = document.querySelector("header nav");

burgerMenu.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent anchor tag from jumping
  nav.classList.toggle("nav-active");
});

// Close menu when clicking a link (optional UX improvement)
const navLinks = document.querySelectorAll(".header-li-items a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-active");
  });
});
