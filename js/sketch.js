var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 100; i++) {
    balls[i] = new Ball();
    balls[i].init();
  }
}

function draw() {
  background("#FFF");
  balls.forEach(b => b.update());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Ball {}

Ball.prototype.init = function() {
  this.x = Math.random() * width; //0 to width
  this.y = Math.random() * height; //0 to height
  this.dx = Math.random() * 2 - 1; // -1 to 1
  this.dy = Math.random() * 2 - 1; // -1 to 1
  this.diam = Math.random() * 100; // 0 to 100
  this.R = Math.random() * 382 - 127; //127 to 255
  this.G = Math.random() * 382 - 127; //127 to 255
  this.B = Math.random() * 382 - 127; //127 to 255
};

Ball.prototype.update = function() {
  fill(this.R, this.G, this.B);
  ellipse(this.x, this.y, this.diam, this.diam);

  this.x += this.dx;
  this.y += this.dy;

  if (this.x > width - this.diam / 2) {
    this.dx = -1 * Math.abs(this.dx);
  }
  if (this.x < this.diam / 2) {
    this.dx = Math.abs(this.dx);
  }
  if (this.y > height - this.diam / 2) {
    this.dy = -1 * Math.abs(this.dy);
  }
  if (this.y < this.diam / 2) {
    this.dy = Math.abs(this.dy);
  }
};
