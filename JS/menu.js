/* JS/menu.js */
(function () {
  const hamburger = document.querySelector('.js-hamburger');
  const mobileNav = document.querySelector('.js-mobile-nav');

  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  // fechar menu ao clicar em um link (mobile)
  mobileNav.addEventListener('click', (e) => {
    const el = e.target;
    if (el.tagName === 'A') {
      mobileNav.classList.remove('open');
    }
  });
})();
