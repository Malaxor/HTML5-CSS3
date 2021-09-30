const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', e => {
   if(e.target.classList.contains('icon')) {
      const { target: arrowIcon } = e;

      arrowIcon.parentElement.classList.toggle('open');
      if(arrowIcon.parentElement.classList.contains('open')) {
         return arrowIcon.style.transform = 'rotate(180deg)';
      }
      return arrowIcon.style.transform = 'rotate(0deg)';
   }
});