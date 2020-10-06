'use strict';

(function () {
  const setupOpen = document.querySelector('.setup-open');
  const setupClose = window.setup.querySelector('.setup-close');
  const setupUserName = window.setup.querySelector('.setup-user-name');
  const setupSimilar = window.setup.querySelector('.setup-similar');
  const wizardElements = {
    coat: {
      elem: window.setup.querySelector('.wizard-coat'),
      input: window.setup.querySelector('input[name = "coat-color"]')
    },
    eyes: {
      elem: window.setup.querySelector('.wizard-eyes'),
      input: window.setup.querySelector('input[name = "eyes-color"]')
    },
    fireball: {
      elem: window.setup.querySelector('.setup-fireball-wrap'),
      input: window.setup.querySelector('input[name = "fireball-color"]')
    }
  };

  function onPopupEscPress(evt) {
    if (setupUserName !== document.activeElement) {
      window.util.isEscapeEvent(evt, closePopup);
    }
  }

  function openPopup() {
    setupSimilar.classList.remove('hidden');
    window.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.colorize.changeColor(wizardElements.coat, window.COAT_COLORS, 'fill');
    window.colorize.changeColor(wizardElements.eyes, window.EYES_COLORS, 'fill');
    window.colorize.changeColor(wizardElements.fireball, window.FIREBALL_COLORS, 'background');
  }

  function closePopup() {
    window.setup.classList.add('hidden');
    window.setup.removeAttribute('style');
    document.removeEventListener('keydown', onPopupEscPress);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });
})();
