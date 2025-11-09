document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.js-hamburger');
  const mobileNav = document.querySelector('.js-mobile-nav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });
});
