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
    name: 'Shelter',
    description:
      'Fully responsive and interactive two page website. Based on Figma template Design.',
    img: 'images/shelter.png',
    language1: 'CSS',
    language2: 'HTML',
    language3: 'JavaScript',
    language4: 'N/A',
    liveLink: 'https://meri-mg.github.io/shelter/pages/main/index.html',
    sourceLink: 'https://github.com/Meri-MG/shelter',
  },
  {
    id: 1,
    name: 'To-Do-App',
    description:
      'In this project was built a simple list of To Do tasks. The user can add, edit, check completed and delete the tasks. This simple web page was built using webpack and served by a webpack dev server.',
    img: 'images/todo1.png',
    language1: 'CSS',
    language2: 'HTML',
    language3: 'JavaScript',
    language4: 'N/A',
    liveLink: 'https://meri-mg.github.io/To-Do-List/dist/',
    sourceLink: 'https://github.com/Meri-MG/To-Do-List',
  },
  {
    id: 2,
    name: 'Bookstore',
    description:
      'A single-page app that allows users to store some of their favorite books. It lets users add their favorite books, remove, edit, update progress, and add comments and categories. I built Rails Api, especially for this project.',
    img: 'images/Bookstore.png',
    language1: 'CSS',
    language2: 'HTML',
    language3: 'React',
    language4: 'Rails API',
    liveLink: 'https://melodic-boba-111583.netlify.app/',
    sourceLink: 'https://github.com/Meri-MG/bookstore---react',
  },
  {
    id: 3,
    name: 'FakeStore',
    description:
      'This is a web application that provides information on each product of the store, allowing users to filter through the results',
    img: 'images/homePage.png',
    language1: 'CSS',
    language2: 'Redux',
    language3: 'React',
    language4: 'JavaScript',
    liveLink: 'https://angry-yalow-17c6ab.netlify.app/',
    sourceLink: 'https://github.com/Meri-MG/metrics-webapp---react',
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
