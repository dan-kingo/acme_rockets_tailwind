const initalize = () => {
  const hamburgerBtn = document.getElementById("mobile");
  const mobileMenu = document.getElementById("mobile-menu");
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initalize);
const date = new Date().getFullYear();
document.getElementById("year").textContent = date;
