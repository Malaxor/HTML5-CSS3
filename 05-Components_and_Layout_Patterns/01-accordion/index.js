const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', e => {
   if(e.target.classList.contains('icon')) {
      const { target: arrowIcon } = e;
      arrowIcon.parentElement.classList.toggle('open');
      const { display: hiddenBoxDisplay } = window.getComputedStyle(e.target.nextElementSibling);

      if(hiddenBoxDisplay === 'block') {
         arrowIcon.style.transform = `rotate(180deg)`;
      }
      else if(hiddenBoxDisplay === 'none') {
         arrowIcon.style.transform = `rotate(0deg)`
      }
   }
});