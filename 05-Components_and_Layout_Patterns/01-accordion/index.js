const accordion = document.getElementsByClassName('accordion')[0];

accordion.addEventListener('click', e => {
   if(e.target.classList.contains('icon')) {
      e.target.parentElement.classList.toggle('open');
   }
});