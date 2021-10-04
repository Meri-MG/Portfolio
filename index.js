const barMenu = document.querySelector('.fa-bars');
const mobileMenu = document.getElementById('menu');
const closedMenu = document.querySelector('.fa-times');
const menuLists = menu.querySelectorAll('.mobile-menu');
barMenu.addEventListener('click', show);
closedMenu.addEventListener('click', close);

for (let i = 0; i < menuLists.length; i += 1){
    menuLists[i].addEventListener('click', close);
}

function show() {
    barMenu.style.display = 'none';
    mobileMenu.classList.add('active');
}

function close () {
    mobileMenu.classList.remove('active');
    barMenu.style.display = 'block';
}
