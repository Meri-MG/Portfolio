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

const projects = [
  {
    id: 0,
    name: 'Yoga Retreat',
    description:
      'This is my first capstone project in Microverse. A website is about fictional yoga retreat that would be held in Thailand. The Project is responsive and fits all the screen sizes.',
    img: 'images/speakers.png',
    language1: 'CSS',
    language2: 'HTML',
    language3: 'bootstrap',
    language4: 'JavaScript',
    liveLink: 'https://meri-mg.github.io/Yoga-Retreat-Page/',
    sourceLink: 'https://github.com/Meri-MG/Yoga-Retreat-Page',
  },
  {
    id: 1,
    name: 'To-Do-App',
    description:
      'In this project was built a simple list of To Do tasks. The user can add, edit, check completed and delete the tasks. This simple web page was built using webpack and served by a webpack dev server.',
    img: 'images/todo1.png',
    language1: 'CSS',
    language2: 'HTML',
    language3: 'bootstrap',
    language4: 'JavaScript',
    liveLink: 'https://meri-mg.github.io/To-Do-List/dist/',
    sourceLink: 'https://github.com/Meri-MG/To-Do-List',
  },
  {
    id: 2,
    name: 'API-based-webapp',
    description:
      'This group project is about building our own web application based on an external API which in this case is NASA API portal. This website helps with discoverability of relevant Astronomy Picture of the Day. User can interact with the website through the likes and comments',
    img: 'images/nebula.png',
    language1: 'CSS',
    language2: 'HTML',
    language3: 'bootstrap',
    language4: 'JavaScript',
    liveLink: 'https://meri-mg.github.io/API-based-webapp/dist/',
    sourceLink: 'https://github.com/Meri-MG/API-based-webapp',
  },
  {
    id: 3,
    name: 'Math Magicians',
    description:
      'This is a simple calculator app created with React where user can perform basic math operations',
    img: 'images/calc.png',
    language1: 'CSS',
    language2: 'HTML',
    language3: 'React',
    language4: 'JavaScript',
    liveLink: 'https://meri-mg.github.io/API-based-webapp/dist/',
    sourceLink: 'https://github.com/Meri-MG/math-magicians---react',
  },
];

// window.addEventListener('DOMContentLoaded', () => {
const displayProjects = (index) => {
  console.log(index);
  const modalHTML = (project) => {
    `<div class="popup-div" id="${index}">
        <div class="header-popup">
          <h2 class="title-popup">${project.name}</h2>
          <img src="./images/times.png" class="closingIcon" alt="close-icon">
        </div>
        <div class="project-popup">
          <img src="${project.img}" alt="image-popup" class="image-popup">
          <div class="info-popup">
            <p>${project.description}</p>
            <ul class="">
              <li class="list-popup" id="left-border">${project.language1}</li>
              <li class="list-popup">${project.language2}</li>
              <li class="list-popup">${project.language3}</li>
              <li class="list-popup">${project.language4}</li>
            </ul>
            <div class="popup-buttons">
              <button  class="btn1">
              <a href="${project.liveLink}">See Live</a>
              <img src="./images/icon-live.png" alt="live-icon">
              </button>
              <button class="btn1">
                  <a href="${project.sourceLink}">See Source</a>
                  <img src="./images/vector.png" alt="source-icon">
              </button>
            </div>
          </div>
        </div>
      </div>`;
    // const closedPopup = document.querySelector('.closingIcon');
    // console.log(closedPopup);
    // closedPopup.addEventListener('click', () => {
    //   mainBody.classList.remove('fixed');
    //   popup.classList.remove('open');
    // });
  };
  projects.forEach((pro) => {
    if (pro.id === index) {
      console.log(pro);
      popup.innerHTML += modalHTML(pro);
      popup.classList.add('open');
      mainBody.classList.add('fixed');
    }
  });
};
// });
// const closingIcon = document.querySelector('.closingIcon');
// console.log(closingIcon);

window.addEventListener('scroll', () => {
  const scroll = this.pageYOffset;
  if (scroll > 50) {
    overlay.classList.remove('active');
  }
});

openPopup.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === projects[index].id) {
      displayProjects(projects[index].id);
      console.log(index, projects[index].id);
      // popup.classList.add('open');
      // mainBody.classList.add('fixed');
    }
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
