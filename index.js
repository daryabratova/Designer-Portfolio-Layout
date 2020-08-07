(function () {
  const nav = document.querySelector(".nav");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      nav.classList.add("nav_active");
    } else {
      nav.classList.remove("nav_active");
    }
  };
})();
