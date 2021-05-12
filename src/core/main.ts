import render from './render';

class Main {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;

  constructor() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.width = 0;
    this.height = 0;
    this.addBindings();
    this.addListeners();
    this.update();
    this.run();
  }

  addBindings() {
    this.update = this.update.bind(this);
  }

  addListeners() {
    window.addEventListener('resize', this.update);
  }

  update() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  run() {
    render(this.ctx, { width: this.width, height: this.height });
  }
}

new Main();
