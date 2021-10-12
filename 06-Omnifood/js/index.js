const headerEl = document.querySelector('.header');
const btnNav = document.querySelector('.btn-mobile-nav');

btnNav.addEventListener('click', () => {
   headerEl.classList.toggle('nav-open');
});