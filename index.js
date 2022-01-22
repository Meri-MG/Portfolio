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
    language3: 'Bootstrap',
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
    name: 'Bookstore',
    description:
      'A single-page app that allows users store some of their favorite books. It lets users add their favorite books to the list and post them to an API. This project was built using Javascript, React-redux',
    img: 'images/Bookstore.png',
    language1: 'CSS',
    language2: 'Redux',
    language3: 'React',
    language4: 'JavaScript',
    liveLink: 'https://heuristic-goldstine-557bec.netlify.app/',
    sourceLink: 'https://github.com/Meri-MG/bookstore---react',
  },
];

const displayProjects = (index) => {
  const modalHTML = ({
    name,
    img,
    description,
    language1,
    language2,
    language3,
    language4,
    liveLink,
    sourceLink,
  }) => {
    return `<div class="popup-div" id="${index}">
        <div class="header-popup">
          <h2 class="title-popup">${name}</h2>
          <img src="./images/times.png" class="closingIcon" alt="close-icon">
        </div>
        <div class="project-popup">
          <img src="${img}" alt="image-popup" class="image-popup">
          <div class="info-popup">
            <p>${description}</p>
            <ul class="">
              <li class="list-popup" id="left-border">${language1}</li>
              <li class="list-popup">${language2}</li>
              <li class="list-popup">${language3}</li>
              <li class="list-popup">${language4}</li>
            </ul>
            <div class="popup-buttons">
              <button  class="btn1">
              <a href="${liveLink}">See Live</a>
              <img src="./images/icon-live.png" alt="live-icon">
              </button>
              <button class="btn1">
                  <a href="${sourceLink}">See Source</a>
                  <img src="./images/vector.png" alt="source-icon">
              </button>
            </div>
          </div>
        </div>
      </div>`;
  };

  projects.forEach((pro) => {
    if (pro.id === index) {
      popup.innerHTML += modalHTML(pro);
      popup.classList.add('open');
      mainBody.classList.add('fixed');
    }
  });
  const popupDIV = document.querySelector('.popup-div');
  const closedPopup = document.querySelector('.closingIcon');
  closedPopup.addEventListener('click', (e) => {
    mainBody.classList.remove('fixed');
    popup.classList.remove('open');
    popupDIV.remove();
    e.preventDefault();
  });
};

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
