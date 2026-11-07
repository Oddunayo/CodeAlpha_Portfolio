document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile Navigation Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  let isMenuOpen = false;

  menuToggle.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove("hidden");
      menuIcon.setAttribute("data-lucide", "x");
    } else {
      mobileMenu.classList.add("hidden");
      menuIcon.setAttribute("data-lucide", "menu");
    }
    lucide.createIcons();
  });

  // Close mobile menu when a navigation link is clicked
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      isMenuOpen = false;
      menuIcon.setAttribute("data-lucide", "menu");
      lucide.createIcons();
    });
  });
});