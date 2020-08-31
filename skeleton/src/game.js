import Level from './level.js';
import Bird from './bird.js';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.level;
    this.running = false;
    this.restart();
  }
  animate(ctx) {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    this.ctx.addEventListener("mousedown", this.click.bind(this));
    if (this.running) window.requestAnimationFrame(this.animate);
  }
  
  restart() {
    this.bird = new Bird(this.dimensions);
    this.level = new Level(this.dimensions);
    this.animate(this.ctx);
    this.running = false;
  }
  
  play() {
    this.running = true;
    this.animate(this.ctx);
  }

  click() {
    if (this.running) {
      this.bird.flap();
    } 
    else {
      this.play();
      this.bird.flap();
    }
  }
}