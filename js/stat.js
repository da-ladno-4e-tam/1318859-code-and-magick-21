'use strict';

const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_VERTICAL_PADDING = 14;
const CLOUD_GAP = 10;
const CLOUD_COLOR_PRIMARY = '#fff';
const CLOUD_COLOR_SECONDARY = 'rgba(0, 0, 0, 0.7)';
const TEXT_CONTENT_VICTORY = 'Ура вы победили!';
const TEXT_CONTENT_RESULTS = 'Список результатов:';
const TEXT_COLOR = '#000';
const TEXT_LEFT_PADDING = 36;
const FONT_SIZE = 16;
const LINE_HEIGHT = 18;
const FONT = `${FONT_SIZE}px PT Mono`;
const BASELINE = 'hanging';
const COLUMN_WIDTH = 40;
const COLUMN_MAX_HEIGHT = 150;
const COLUMN_VERTICAL_PADDING = 8;
const COLUMN_GAP = 50;

function renderRect(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function renderCloud(ctx) {
  renderRect(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR_SECONDARY);
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR_PRIMARY);
}

function renderText(ctx, content, x, y) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(content, x, y);
}

function renderResultText(ctx) {
  renderText(ctx, TEXT_CONTENT_VICTORY, CLOUD_X + TEXT_LEFT_PADDING, CLOUD_Y + CLOUD_VERTICAL_PADDING);
  renderText(ctx, TEXT_CONTENT_RESULTS, CLOUD_X + TEXT_LEFT_PADDING, CLOUD_Y + CLOUD_VERTICAL_PADDING + LINE_HEIGHT);
}

function getMaxElement(arr) {
  return Math.max(...arr);
}

function getColumnHeight(playerTime, times) {
  return COLUMN_MAX_HEIGHT * playerTime / getMaxElement(times);
}

function getRandomSaturation() {
  return Math.floor(Math.random() * 101);
}

function getColumnColor(player) {
  let columnColor = 'rgba(255, 0, 0, 1)';
  if (player !== 'Вы') {
    columnColor = `hsl(240, ${getRandomSaturation()}%, 50%)`;
  }
  return columnColor;
}

window.renderStatistics = function (ctx, players, times) {
  const sidePadding = (CLOUD_WIDTH - players.length * COLUMN_WIDTH - (players.length - 1) * COLUMN_GAP) / 2;

  ctx.textBaseline = BASELINE;
  ctx.font = FONT;
  renderCloud(ctx);
  renderResultText(ctx);

  for (let i = 0; i < players.length; i++) {
    const columnX = CLOUD_X + sidePadding + (COLUMN_WIDTH + COLUMN_GAP) * i;
    const columnY = CLOUD_Y + CLOUD_HEIGHT - (CLOUD_VERTICAL_PADDING + FONT_SIZE + getColumnHeight(times[i], times) + COLUMN_VERTICAL_PADDING);

    renderText(ctx, players[i], columnX, CLOUD_Y + CLOUD_HEIGHT - (CLOUD_VERTICAL_PADDING + FONT_SIZE));
    renderRect(ctx, columnX, columnY, COLUMN_WIDTH, getColumnHeight(times[i], times), getColumnColor(players[i]));
    renderText(ctx, Math.round(times[i]), columnX, columnY - (FONT_SIZE + COLUMN_VERTICAL_PADDING));
  }
};
