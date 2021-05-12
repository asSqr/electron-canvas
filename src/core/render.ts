import log from 'electron-log';

let cnt = 0;

const render = (ctx: CanvasRenderingContext2D): void => {
  ++cnt;

  log.info(cnt);

  ctx.strokeStyle = 'rgb(255, 0, 0)';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, cnt, 500);

  return;
};

export default render;
