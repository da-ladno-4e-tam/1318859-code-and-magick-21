'use strict';

(function () {
  window.setup = document.querySelector('.setup');
  window.COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  window.FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  const NUMBER_OF_WIZARDS = 4;
  const similarListElement = window.setup.querySelector('.setup-similar-list');
  const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function renderWizard(wizard) {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style = `fill: ${wizard.colorCoat}`;
    wizardElement.querySelector('.wizard-eyes').style = `fill: ${wizard.colorEyes}`;
    return wizardElement;
  }

  function onLoad(wizards) {
    window.utils.getRandomContent(renderWizard, wizards, NUMBER_OF_WIZARDS, similarListElement);
  }

  function onError(errorMessage, action) {
    const node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    if (action === 'save') {
      node.style.top = '30px';
    }
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), function () {
      window.setup.classList.add('hidden');
    }, onError);
  }

  const form = window.setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', onSubmit);

  window.backend.load(onLoad, onError);
})();
