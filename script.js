const btn = document.querySelector('.menu-btn');  // Use querySelector instead of getElementsByClassName
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}

