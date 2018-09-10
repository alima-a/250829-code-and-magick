'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_SUM = 4;

// Делаем блок видимым
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Найдем элементы
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// Функция получения рандомного числа от min до max
var getRandomNum = function (min, max) {
  return Math.random() * (max - min) + min;
};

// Функция получения рандомного элемента
var getRandomItem = function (array) {
  return array[getRandomNum(0, array.length - 1)];
};

// Функция получения массива волшебников
var getWizards = function (wizardsSum) {
  var wizardsMassif = [];

  for (var i = 0; i < wizardsSum; i++) {
    wizardsMassif[i] = {
      name: getRandomItem(WIZARDS_NAMES) + ' ' + getRandomItem(WIZARDS_SURNAMES),
      coatColor: getRandomItem(WIZARD_COATS_COLORS),
      eyesColor: getRandomItem(WIZARD_EYES_COLORS)
    };
  }

  return wizardsMassif;
};

// Получаем массив волшебников
var wizards = getWizards(WIZARDS_SUM);

// DOM-элемент заполняем данными из массива
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Отрисуем сгенерированные DOM-элементы в блок
// Не совсем понимаю, как тут надо

// Делаем видимым блок
userDialog.querySelector('.setup-similar').classList.remove('hidden');


