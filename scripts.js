function showTheMenu() {
  if (window.screen.width >= 768) {
    return;
  }
  document.getElementById('overlay').style.display = 'flex';
}

function hideTheMenu() {
  document.getElementById('overlay').style.display = 'none';
}

const navElement = document.getElementById('nav');
navElement.addEventListener('click', showTheMenu);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', hideTheMenu);

const menuLinks = document.getElementsByClassName('menu-link');
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', hideTheMenu);
}

const projectsDetails = [
  {
    title: 'Math-Magicians',
    featured_image: './images/project-snapshots/math_magician.PNG',
    description:
      'Math magicians is a website for all fans of mathematics',
    technologies: ['Html', 'CSS', 'JavaScript'],
    link_to_Source: 'https://github.com/Terbeche/Math-Magicians',
    link_to_live_version: 'https://math-magicians-react-project.netlify.app/',
  },
  {
    title: 'Budget App',
    featured_image: './images/project-snapshots/budget_app.PNG',
    description:
    'This is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'React'],
    link_to_Source: 'https://github.com/Terbeche/Budget-app',
    link_to_live_version: 'https://budget-app-productions.up.railway.app/',
  },
  {
    title: 'Leaderboard',
    featured_image: './images/project-snapshots/leaderboard.PNG',
    description:
      'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    technologies: ['Html', 'CSS', 'JavaScript'],
    link_to_Source: 'https://github.com/Terbeche/Leaderboard',
    link_to_live_version: 'https://terbeche.github.io/Leaderboard/',
  },
  {
    title: 'TV Show',
    featured_image: './images/project-snapshots/tv_shows.PNG',
    description:
      'This is a website that displays a list of movies from an external API',
    technologies: ['Html', 'CSS', 'JavaScript'],
    link_to_Source: 'https://github.com/Terbeche/TV-SHOW',
    link_to_live_version: 'https://terbeche.github.io/TV-SHOW/',
  },
  {
    title: 'E Learning Platform',
    featured_image: './images/project-snapshots/e_learning.PNG',
    description:
      'This is a E-learning-platform website is a simple static website representing an E-Learning platform.',
    technologies: ['Html', 'CSS', 'JavaScript'],
    link_to_Source: 'https://github.com/Terbeche/E-learning-platform',
    link_to_live_version: 'https://terbeche.github.io/E-learning-platform/',
  },
  {
    title: 'Countries Information',
    featured_image: ('./images/project-snapshots/countries_information.PNG'),
    description:
      'In this project, I have worked with the real live data from the RESTCountries API. This web application provides some information about more than 250 countries worldwide like the area, population, capital, continent, and the official flag.',
    technologies: ['React', 'Redux', 'CSS'],
    link_to_Source: 'https://github.com/Terbeche/countries-information',
    link_to_live_version: 'https://countries-information-api.netlify.app/',
  },

];

for (let i = 0; i < projectsDetails.length; i += 1) {
  const projectItem = document.createElement('div');
  const k = i + 2;
  projectItem.id = `item${k}`;
  projectItem.classList.add('item');
  projectItem.classList.add('card-item');
  // projectItem.style.backgroundImage = `url(${projectsDetails[i].featured_image})`;

  // const projectTitle = document.createElement('h3');
  // projectTitle.classList.add('card-title');
  // projectTitle.textContent = projectsDetails[i].title;
  // projectItem.appendChild(projectTitle);

  // const projectDescription = document.createElement('p');
  // projectDescription.classList.add('card-description');
  // projectDescription.textContent = projectsDetails[i].description;
  // projectItem.appendChild(projectDescription);

  const projectImage = document.createElement('img');
  projectImage.classList.add('card-image');
  projectImage.src = projectsDetails[i].featured_image;
  projectImage.alt = 'project screen shot';
  projectItem.appendChild(projectImage);

  const projectSkills = document.createElement('ul');
  projectSkills.classList.add('skills');

  for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
    const technology = document.createElement('li');
    technology.textContent = projectsDetails[i].technologies[j];
    technology.classList.add('read-button');
    projectSkills.appendChild(technology);
  }

  projectItem.appendChild(projectSkills);

  const seeProjectButton = document.createElement('button');
  seeProjectButton.type = 'button';
  seeProjectButton.name = 'button';
  seeProjectButton.textContent = 'See Project';
  seeProjectButton.classList.add('project-button');
  seeProjectButton.classList.add('see-project-button');

  projectItem.appendChild(seeProjectButton);

  document.querySelector('#work').appendChild(projectItem);
}

function hideProjectDetailsPopup() {
  document.querySelector('#popup-overlay').style.display = 'none';
  document.querySelector('#details-popup').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function showProjectDetailsPopup(i) {
  if (!!document.getElementById('popup-container') === true) {
    document.getElementById('popup-container').remove();
  }
  document.body.style.overflow = 'hidden';

  const projectDetailsPopupContainer = document.createElement('div');
  projectDetailsPopupContainer.id = 'popup-container';

  const projectDetailsPopupOverlay = document.createElement('div');
  projectDetailsPopupOverlay.id = 'popup-overlay';
  projectDetailsPopupOverlay.style.display = 'block';
  projectDetailsPopupContainer.appendChild(projectDetailsPopupOverlay);

  const projectDetailsPopup = document.createElement('div');
  projectDetailsPopup.id = 'details-popup';
  projectDetailsPopup.style.display = 'flex';
  if (window.screen.width >= 768) {
    projectDetailsPopup.style.top = `${window.pageYOffset - 90}px`;
  } else {
    projectDetailsPopup.style.top = `${window.pageYOffset + 16}px`;
  }
  projectDetailsPopupContainer.appendChild(projectDetailsPopup);

  const popupHeader = document.createElement('div');
  popupHeader.id = 'popup-header';
  const popupHeaderTitle = document.createElement('h3');
  popupHeaderTitle.textContent = projectsDetails[i].title;
  popupHeader.appendChild(popupHeaderTitle);

  const popupHeaderCloseButton = document.createElement('img');
  popupHeaderCloseButton.id = 'popup-close-button';
  popupHeaderCloseButton.src = './images/Icons/close-popup.svg';
  popupHeaderCloseButton.alt = 'close popup window';
  popupHeader.appendChild(popupHeaderCloseButton);
  projectDetailsPopup.appendChild(popupHeader);

  const projectSkills = document.createElement('ul');
  projectSkills.classList.add('skills');

  for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
    const technology = document.createElement('li');
    technology.textContent = projectsDetails[i].technologies[j];
    technology.classList.add('read-button');
    projectSkills.appendChild(technology);
  }

  projectDetailsPopup.appendChild(projectSkills);

  const popupContainer2 = document.createElement('div');
  popupContainer2.id = 'popup-container-2';

  const popupImage = document.createElement('img');
  popupImage.classList.add('popup-image');
  popupImage.src = projectsDetails[i].featured_image;
  popupImage.alt = 'Project snapshot';
  popupContainer2.appendChild(popupImage);

  const popupDescription = document.createElement('div');
  popupDescription.id = 'popup-description';
  const popupTextDescription = document.createElement('p');
  popupTextDescription.id = 'popup-text-description';
  popupTextDescription.textContent = projectsDetails[i].description;
  popupDescription.appendChild(popupTextDescription);

  const popupButtons = document.createElement('div');
  popupButtons.id = 'popup-buttons';

  const popuplink1 = document.createElement('a');
  popuplink1.href = projectsDetails[i].link_to_live_version;
  popuplink1.target = '_blank';

  const popupButton1 = document.createElement('button');
  popupButton1.id = 'popupButton1';
  popupButton1.textContent = 'See live';
  const popupButton1Icon = document.createElement('i');
  popupButton1Icon.classList.add('link-icon');
  popupButton1.appendChild(popupButton1Icon);

  popuplink1.appendChild(popupButton1);
  popupButtons.appendChild(popuplink1);

  const popuplink2 = document.createElement('a');
  popuplink2.href = projectsDetails[i].link_to_Source;
  popuplink2.target = '_blank';

  const popupButton2 = document.createElement('button');
  popupButton2.id = 'popupButton2';
  popupButton2.textContent = 'See Source';
  const popupButton2Icon = document.createElement('i');
  popupButton2Icon.classList.add('github-icon');
  popupButton2.appendChild(popupButton2Icon);

  popuplink2.appendChild(popupButton2);
  popupButtons.appendChild(popuplink2);

  popupDescription.appendChild(popupButtons);

  popupContainer2.appendChild(popupDescription);

  projectDetailsPopup.appendChild(popupContainer2);

  document.body.appendChild(projectDetailsPopupContainer);
  popupHeaderCloseButton.addEventListener('click', hideProjectDetailsPopup);
}

const projectButtonElements = document.getElementsByClassName('see-project-button');

for (let i = 0; i < projectButtonElements.length; i += 1) {
  if (projectButtonElements[i].innerHTML === 'See Project') {
    projectButtonElements[i].addEventListener('click', () => {
      showProjectDetailsPopup(i);
    });
  }
}

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const formButton = document.querySelector('#contact-button');
const nameInput = document.getElementById('name');
const feedbackInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    formButton.setCustomValidity('email-id must be in lower case!');
    formButton.reportValidity();
    event.preventDefault();
  }
});

let contactForm = { name: '', email: '', feedbackMessage: '' };

const retreivedContactFormValues = JSON.parse(localStorage.getItem('contactForm'));

if (retreivedContactFormValues) {
  contactForm = retreivedContactFormValues;
  nameInput.value = retreivedContactFormValues.name;
  emailInput.value = retreivedContactFormValues.email;
  feedbackInput.value = retreivedContactFormValues.feedbackMessage;
}

emailInput.addEventListener('input', () => {
  formButton.setCustomValidity('');
  contactForm.email = emailInput.value;
  localStorage.setItem('contactForm', JSON.stringify(contactForm));
});

nameInput.addEventListener('input', () => {
  contactForm.name = nameInput.value;
  localStorage.setItem('contactForm', JSON.stringify(contactForm));
});

feedbackInput.addEventListener('input', () => {
  contactForm.feedbackMessage = feedbackInput.value;
  localStorage.setItem('contactForm', JSON.stringify(contactForm));
});
