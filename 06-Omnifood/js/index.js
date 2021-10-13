const headerEl = document.querySelector('.header');
const btnNavEl = document.querySelector('.btn-mobile-nav');
const sectionHero = document.querySelector('.section-hero');

btnNavEl.addEventListener('click', () => {
   headerEl.classList.toggle('nav-open');
});

// smooth scroll animation (event delegation)
document.body.addEventListener('click', e => {
   if(e.target.hasAttribute('href')) { 
      e.preventDefault();
      const href = e.target.getAttribute('href');
   
      if(href === '#') {
         window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
         });
      }
      else if(href.startsWith('#') && href.length > 1) {
         const sectionEl = document.querySelector(href);
         sectionEl.scrollIntoView({ behavior: 'smooth' });
      }
      if(e.target.classList.contains('main-nav-link')) {
         headerEl.classList.toggle('nav-open');
      }
   }
});
// sticky nav
const obs = new IntersectionObserver(entries => {
   const entry = entries[0];

   if(!entry.isIntersecting) {
      document.body.classList.add('sticky');
   }
   else {
      document.body.classList.remove('sticky');
   }
}, {
      // inside the viewport
      root: null,
      // event will fire when 0% of the hero section is in the viewport
      threshold: 0,
      // event will fire at -80px from bottom of 0% threshold
      rootMargin: '-80px'
   }
);
obs.observe(sectionHero);

// fixing flexbox gap property missing in some Safari versions
(function checkFlexGap() {
   var flex = document.createElement('div');
   flex.style.display = 'flex';
   flex.style.flexDirection = 'column';
   flex.style.rowGap = '1px';

   flex.appendChild(document.createElement('div'));
   flex.appendChild(document.createElement('div'));

   document.body.appendChild(flex);
   var isSupported = flex.scrollHeight === 1;
   flex.parentNode.removeChild(flex);

   if(!isSupported) {
      document.body.classList.add('no-flexbox-gap');
   }
})();