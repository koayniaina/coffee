const burger = document.querySelector(".burger");
const nav = document.querySelector(" .nav-links span");
const navMenu = document.querySelector(" .nav-links li");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

nav.addEventListener("click", () => {
  burger.click();
});

navMenu.addEventListener("click", () => {
  burger.click();
});
