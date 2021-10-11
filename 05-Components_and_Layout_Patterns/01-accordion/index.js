const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', e => {
   if(e.target.classList.contains('icon')) {
      e.target.parentElement.classList.toggle('open');
      
      if(e.target.parentElement.classList.contains('open')) {
         return e.target.style.transform = 'rotate(180deg)';
      }
      return e.target.style.transform = 'rotate(0deg)';
   }
});