const drawer = document.getElementById('drawer');
const hamburger = document.getElementById('hamburger');
const main = document.querySelector('main');

hamburger.addEventListener('click', e => {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

main.addEventListener('click', e => {
  drawer.classList.remove('open');
});
