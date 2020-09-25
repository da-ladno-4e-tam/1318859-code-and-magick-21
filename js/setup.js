'use strict';

const SETUP = document.querySelector('.setup');
const SETUP_SIMILAR = document.querySelector('.setup-similar');
const NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
const wizards = [];
const similarListElement = SETUP.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

SETUP.classList.remove('hidden');

function getRandomElement(arr) {
  const randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
}

function getWizardsList() {
  for (let i = 0; i < 4; i++) {
    const wizard = {
      name: `${getRandomElement(NAMES)} ${getRandomElement(SURNAMES)}`,
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS)
    };
    wizards.push(wizard);
  }
  return wizards;
}

getWizardsList();

function renderWizard(wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style = `fill: ${wizard.coatColor}`;
  wizardElement.querySelector('.wizard-eyes').style = `fill: ${wizard.eyesColor}`;
  return wizardElement;
}

function getContent(render, arr) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < arr.length; i++) {
    fragment.appendChild(render(arr[i]));
  }

  similarListElement.appendChild(fragment);
}

getContent(renderWizard, wizards);

SETUP_SIMILAR.classList.remove('hidden');
