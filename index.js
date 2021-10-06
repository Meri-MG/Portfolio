const barMenu = document.querySelector('.fa-bars');
const mobileMenu = document.getElementById('menu');
const closedMenu = document.querySelector('.fa-times');
const menuLists = document.querySelectorAll('.mobile-menu');
const popup = document.querySelector('.work-popup');
const mainBody = document.querySelector('body');
const openPopup = document.querySelectorAll('.btn');
const overlay = document.querySelector('.wrapper');

function show() {
  barMenu.style.display = 'none';
  mobileMenu.classList.add('active');
}

function close() {
  mobileMenu.classList.remove('active');
  barMenu.style.display = 'block';
}

barMenu.addEventListener('click', show);
closedMenu.addEventListener('click', close);
for (let i = 0; i < menuLists.length; i += 1) {
  menuLists[i].addEventListener('click', close);
}

const projects = {
  'name':'multi-post stories',
  'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
  'img':'images/popup.png',
  'language1':'css',
  'language2': 'html',
  'language3': 'bootstrap',
  'language4': 'Ruby'
};
  

window.addEventListener('DOMContentLoaded', () => {
  popup.innerHTML = `<div class="popup-div">
    <div class="header-popup">
      <h2 class="title-popup">${projects.name}</h2>
      <img src="./images/times.png" class="whatever" alt="close-icon">
    </div>
    <div class="project-popup">
      <img src="${projects.img}" alt="image-popup" class="image-popup">
      <div class="info-popup">
        <p>${projects.description}</p>
        <ul class="">
          <li class="list-popup" id="left-border">${projects.language1}</li>
          <li class="list-popup">${projects.language2}</li>
          <li class="list-popup">${projects.language3}</li>
          <li class="list-popup">${projects.language4}</li>
        </ul>
        <div class="popup-buttons">
          <button class="btn1">
              <p>see live</p>
              <img src="./images/icon-live.png" alt="live-icon">
          </button>
          <button class="btn1">
              <p>see source</p>
              <img src="./images/vector.png" alt="source-icon">
          </button>
        </div>
      </div>
    </div>
  </div>`;
  const closedPopup = document.querySelector('.whatever')
  closedPopup.addEventListener('click', () => {
    mainBody.classList.remove('fixed'); 
    popup.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  const scroll = this.pageYOffset;
  if(scroll > 50) {
    overlay.classList.remove('active')
  }
});

openPopup.forEach((e) => {
  e.addEventListener('click', () => {
    popup.classList.add('open');
    mainBody.classList.add('fixed');
  });
});

