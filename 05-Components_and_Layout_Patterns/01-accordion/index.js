const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', e => {
   if(e.target.classList.contains('icon')) {
      e.target.parentElement.classList.toggle('open');
   }
});