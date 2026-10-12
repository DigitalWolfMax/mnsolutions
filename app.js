document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil básico
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Scroll suave para enlaces (nav y botones hero)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Si el menú móvil está abierto, cerrarlo al hacer clic en un link
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Teniendo en cuenta la altura de la navbar pegajosa
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Formulario simulado (evita que recargue la página)
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "¡Gracias por tu mensaje! Me pondré en contacto contigo a la brevedad.",
      );
      form.reset();
    });
  }
});
