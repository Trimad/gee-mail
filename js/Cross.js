class Cross {
  constructor(rx, ry, rz) {
    this.x = rx;
    this.y = ry;
    this.z = rz;
  }

  show() {
    var unit = windowWidth * 0.1;
    var speed = 0.001;
    noStroke();
    specularMaterial(250);

    translate(this.x, this.y, this.z);
    push();
    rotateZ(this.x*0.001);
    rotateZ(frameCount * speed);
    rotateX(frameCount * speed);
    rotateY(frameCount * speed);
    box(unit, unit, unit);
    translate(0, unit, 0);
    box(unit, unit, unit);
    translate(unit, 0, 0);
    box(unit, unit, unit);
    translate(-unit * 2, 0, 0);
    box(unit, unit, unit);
    translate(unit, unit, 0);
    box(unit, unit, unit);
    translate(0, unit, 0);
    box(unit, unit, unit);
    pop();
    translate(-this.x, -this.y, -this.z);
  }
}
