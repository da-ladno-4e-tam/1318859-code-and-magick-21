'use strict';

(function () {
  window.setup = document.querySelector('.setup');
  window.COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  window.FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  const NUMBER_OF_WIZARDS = 4;
  const NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  const SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  const wizards = [];
  const similarListElement = window.setup.querySelector('.setup-similar-list');
  const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function getRandomWizard() {
    return {
      name: `${window.getRandomElement(NAMES)} ${window.getRandomElement(SURNAMES)}`,
      coatColor: window.getRandomElement(window.COAT_COLORS),
      eyesColor: window.getRandomElement(window.EYES_COLORS)
    };
  }

  window.getElementsList(NUMBER_OF_WIZARDS, wizards, getRandomWizard);

  function renderWizard(wizard) {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style = `fill: ${wizard.coatColor}`;
    wizardElement.querySelector('.wizard-eyes').style = `fill: ${wizard.eyesColor}`;
    return wizardElement;
  }

  window.getContent(renderWizard, wizards, similarListElement);
})();
