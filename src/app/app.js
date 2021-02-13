import "./style.scss";

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 55) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});

const mobileMenuButton = document.querySelector(".menu__button");

mobileMenuButton.addEventListener("click", () => {
  document.body.classList.toggle("body--show-menu");
});

const mobileNavigationLinks = document.querySelectorAll(
  ".header-mobile .navigation__link"
);

mobileNavigationLinks.forEach((navigationLink) => {
  navigationLink.addEventListener("click", () => {
    document.body.classList.remove("body--show-menu");
  });
});
