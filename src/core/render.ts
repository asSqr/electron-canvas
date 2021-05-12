type MainInfo = {
  width: number;
  height: number;
};

let cnt = 0;

const render = (ctx: CanvasRenderingContext2D, info: MainInfo): void => {
  ++cnt;

  console.log(cnt);

  const { width: scrW, height: scrH } = info;

  ctx.clearRect(0, 0, scrW, scrH);
  ctx.strokeStyle = 'rgb(255, 0, 0)';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, cnt, 500);

  requestAnimationFrame(() => render(ctx, info));

  return;
};

export default render;
