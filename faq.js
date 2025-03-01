
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item h2");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarNav = document.querySelector(".navbar-nav");

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
