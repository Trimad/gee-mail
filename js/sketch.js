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
  this.dx = Math.random() * 1.5 - 0.5; // -0.5 to 0.5
  this.dy = Math.random() * 1.5 - 0.5; // -0.5 to 0.5
  this.diameter = Math.random() * 128; // 0 to 128
  this.radius = this.diameter * 0.5; // 0 to 50
  this.R = Math.random() * 382 - 127; //127 to 255
  this.G = Math.random() * 382 - 127; //127 to 255
  this.B = Math.random() * 382 - 127; //127 to 255
};

Ball.prototype.update = function() {
  fill(this.R, this.G, this.B, 10);
  ellipse(this.x, this.y, this.diameter, this.diameter);

  this.x += this.dx;
  this.y += this.dy;

  if (this.x >= width - this.radius) {
    this.dx *= -1;
  }
  if (this.x <= this.radius) {
    this.dx *= -1;
  }
  if (this.y >= height - this.radius) {
    this.dy *= -1;
  }
  if (this.y <= this.radius) {
    this.dy *= -1;
  }
};
