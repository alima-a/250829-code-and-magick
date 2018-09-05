'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';
var SHADOW_SHIFT = 10;
var SHADOW_X = CLOUD_X + SHADOW_SHIFT;
var SHADOW_Y = CLOUD_Y + SHADOW_SHIFT;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var GAP = 50;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

// Функция для рисования облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция для получения максимального элемента
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// Функция получения рандомного числа от min до max
var getRandomNum = function (min, max) {
  return Math.random() * (max - min) + min;
};

window.renderStatistics = function (ctx, names, times) {
  // Облако
  renderCloud(ctx, SHADOW_X, SHADOW_Y, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  // Текст
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура! Вы победили!', 130, 30);
  ctx.fillText('Список результатов:', 130, 50);

  // Гистограмма
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP * i, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT));
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (BAR_WIDTH * times[i]) / maxTime, BAR_HEIGHT);
  }
  //  Положение колонок и имен все равно чооопопало получается -_-
};
