// Alternar visibilidade do menu mobile
document.getElementById("toggle").addEventListener("change", () => {
  const menuItems = document.querySelector(".menu-items");
  menuItems.style.visibility =
    menuItems.style.visibility === "visible" ? "hidden" : "visible";
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Ajustar layout dinamicamente ao redimensionar
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const desktopNav = document.getElementById("desktop-nav");
  const mobileMenu = document.querySelector(".checkbox-container");

  if (width > 1024) {
    desktopNav.style.display = "flex";
    mobileMenu.style.display = "none";
  } else {
    desktopNav.style.display = "none";
    mobileMenu.style.display = "flex";
  }
});

// Efeito hover nos botões
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.1)";
    button.style.transition = "transform 0.2s ease";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});
