// Interacciones principales de la web FES.

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const navLinks = document.querySelectorAll('#site-nav a');
const currentYear = document.querySelector('#current-year');

// Menú responsive para dispositivos móviles.
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Cerrar el menú al seleccionar una opción.
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Año actual automático en el footer.
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
