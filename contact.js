document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarNav = document.querySelector(".navbar-nav");
  
    document.querySelectorAll(".contact-card").forEach(card => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    });



  if (menuToggle && navbarNav) {
      menuToggle.addEventListener("click", () => {
          navbarNav.classList.toggle("active");
          menuToggle.classList.toggle("active");
      });

      // Close menu when clicking a link (useful for mobile)
      document.querySelectorAll(".navbar-nav a").forEach(link => {
          link.addEventListener("click", () => {
              navbarNav.classList.remove("active");
              menuToggle.classList.remove("active");
          });
      });
  } else {
      console.error("Navbar elements not found. Check your HTML structure.");
  }
});
