'use strict';

// Делам блок видимым
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Получаем рандомное имя
var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var randomName = Math.floor(Math.random() * wizardsNames.length);

// Получаем рандомную фамилию
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var randomSurname = Math.floor(Math.random() * wizardsSurnames.length);

// Получаем массив с рандомными полными именами
var name = [randomName + randomSurname, randomName + randomSurname, randomName + randomSurname, randomName + randomSurname];
