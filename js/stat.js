'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const MAX_COLUMN_HEIGHT = 150;
const COLUMN_WIDTH = 40;
const COLUMN_CAP = 50;
const COLUMN_VERTICAL_PADDING = 8;
const CLOUD_VERTICAL_PADDING = 14;
const FONT_SIZE = 16;
const LINE_HEIGHT = 18;

function renderRect(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function renderText(ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.font = `${FONT_SIZE}px PT Mono`;
  ctx.fillText(text, x, y);
}

window.renderStatistics = function (ctx, players, times) {
  const maxTime = Math.max(...times);
  const PADDING_LEFT = (CLOUD_WIDTH - players.length * COLUMN_WIDTH - (players.length - 1) * COLUMN_CAP) / 2;

  renderRect(ctx, CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');

  renderText(ctx, 'Ура вы победили!', CLOUD_X + PADDING_LEFT, CLOUD_Y + CLOUD_VERTICAL_PADDING);
  renderText(ctx, 'Список результатов:', CLOUD_X + PADDING_LEFT, CLOUD_Y + CLOUD_VERTICAL_PADDING + LINE_HEIGHT);

  for (let i = 0; i < players.length; i++) {
    renderText(ctx, players[i], CLOUD_X + PADDING_LEFT + (COLUMN_WIDTH + COLUMN_CAP) * i, CLOUD_Y + CLOUD_HEIGHT - (CLOUD_VERTICAL_PADDING + FONT_SIZE));
    if (players[i] === 'Вы') {
      renderRect(ctx, CLOUD_X + PADDING_LEFT + (COLUMN_WIDTH + COLUMN_CAP) * i, CLOUD_Y + CLOUD_HEIGHT - (CLOUD_VERTICAL_PADDING + FONT_SIZE + MAX_COLUMN_HEIGHT * times[i] / maxTime + COLUMN_VERTICAL_PADDING), COLUMN_WIDTH, MAX_COLUMN_HEIGHT * times[i] / maxTime, 'rgba(255, 0, 0, 1)');
    } else {
      renderRect(ctx, CLOUD_X + PADDING_LEFT + (COLUMN_WIDTH + COLUMN_CAP) * i, CLOUD_Y + CLOUD_HEIGHT - (CLOUD_VERTICAL_PADDING + FONT_SIZE + MAX_COLUMN_HEIGHT * times[i] / maxTime + COLUMN_VERTICAL_PADDING), COLUMN_WIDTH, MAX_COLUMN_HEIGHT * times[i] / maxTime, `hsl(240, ${Math.floor(Math.random() * 101)}%, 50%)`);
    }
    renderText(ctx, Math.round(times[i]), CLOUD_X + PADDING_LEFT + (COLUMN_WIDTH + COLUMN_CAP) * i, CLOUD_Y + CLOUD_HEIGHT - (CLOUD_VERTICAL_PADDING + 2 * FONT_SIZE + MAX_COLUMN_HEIGHT * times[i] / maxTime + 2 * COLUMN_VERTICAL_PADDING));
  }
};
