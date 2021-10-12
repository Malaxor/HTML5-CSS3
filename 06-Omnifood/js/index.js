const headerEl = document.querySelector('.header');
const btnNavEl = document.querySelector('.btn-mobile-nav');
const allLinks = document.getElementsByTagName('a');
const sectionHero = document.querySelector('.section-hero');

btnNavEl.addEventListener('click', () => {
   headerEl.classList.toggle('nav-open');
});

// smooth scroll animation
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
// sticky nav
const obs = new IntersectionObserver(entries => {
   const entry = entries[0];

   if(!entry.isIntersecting) {
      document.body.classList.add('sticky');
   }
   if(entry.isIntersecting) {
      document.body.classList.remove('sticky');
   }
}, {
      // inside the viewport
      root: null,
      // event will fire when 0% of the hero section is in the viewport
      threshold: 0,
      rootMargin: '-80px'
   }
);
obs.observe(sectionHero);