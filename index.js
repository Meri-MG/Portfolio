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
  name: 'Yoga Retreat',
  description: 'This is my first capstone project in Microverse. A website is about fictional yoga retreat that would be held in Thailand. The Project is responsive and fits all the screen sizes.',
  img: 'images/speakers.png',
  language1: 'css',
  language2: 'html',
  language3: 'bootstrap',
  language4: 'Ruby',
  liveLink: 'https://meri-mg.github.io/Portfolio/',
  sourceLink: 'https://github.com/Meri-MG/Portfolio',
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
          <button  class="btn1">
          <a href="${projects.liveLink}">See Live</a>
          <img src="./images/icon-live.png" alt="live-icon">
          </button>
          <button class="btn1">
              <a href="${projects.sourceLink}">See Source</a>
              <img src="./images/vector.png" alt="source-icon">
          </button>
        </div>
      </div>
    </div>
  </div>`;
  const closedPopup = document.querySelector('.whatever');
  closedPopup.addEventListener('click', () => {
    mainBody.classList.remove('fixed');
    popup.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  const scroll = this.pageYOffset;
  if (scroll > 50) {
    overlay.classList.remove('active');
  }
});

openPopup.forEach((e) => {
  e.addEventListener('click', () => {
    popup.classList.add('open');
    mainBody.classList.add('fixed');
  });
});

const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);
const email = id('email');
const form = id('form');
const errorMsg = classes('error');

const validation = (id, serial, message) => {
  if (id.value !== id.value.toLowerCase()) {
    errorMsg[serial].innerHTML = message;
    id.style.border = '2px solid red';
  } else {
    errorMsg.innerHTML = '';
    form.submit();
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validation(email, 1, 'Email should be written in lowercase');
});

const addData = (formName, formEmail, formMsg) => {
  const myStorage = { formName, formEmail, formMsg };
  localStorage.setItem('myStorage', JSON.stringify(myStorage));
};

form.addEventListener('input', () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const msg = document.getElementById('textarea');
  const formInput = {
    formName: name.value,
    formEmail: email.value,
    formMsg: msg.value,
  };
  addData(formInput.formName, formInput.formEmail, formInput.formMsg);
});

const displayData = () => {
  const data = JSON.parse(localStorage.getItem('myStorage'));
  document.getElementById('name').value = data.formName;
  document.getElementById('email').value = data.formEmail;
  document.getElementById('textarea').value = data.formMsg;
};

displayData();
