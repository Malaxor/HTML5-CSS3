const headerEl = document.querySelector('.header');
const btnNavEl = document.querySelector('.btn-mobile-nav');

btnNavEl.addEventListener('click', () => {
   headerEl.classList.toggle('nav-open');
});

// smooth scroll animation
const allLinks = document.getElementsByTagName('a');

Array.from(allLinks).forEach(link => {
   link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      // scroll back to top
      if(href === '#') {
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         })
      }
      // links with hrefs pointing to sections (ex: #meals, #cta)
      if(href.startsWith("#") && href.length > 1) {
         const sectionEl = document.querySelector(href);
         sectionEl.scrollIntoView({ behavior: 'smooth' });
      }
      // close mobile nav
      if(link.classList.contains('main-nav-link')) {
         headerEl.classList.toggle('nav-open');
      }
   });
});