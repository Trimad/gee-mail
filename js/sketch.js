function setup() { 
	createCanvas(windowWidth, windowHeight,P2D);

	for (var i = 0; i < 100; i++) {
		bulles[i] = new UsineABulle();
		bulles[i].creation();
  };
  noStroke();
}

function draw() {
	background('#FFF');

	for (var i = 0; i < bulles.length; i++) {
		bulles[i].redessine();
	};
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

var bulles = [];

function UsineABulle(){};
UsineABulle.prototype = {
	creation : function(){
		this.x = width/2;
		this.y = height/2;
		this.vitx = random(-5, 5);
		this.vity = random(-5, 5);
		this.diam = random(10, 100);
		this.coulR = random(127, 255);
		this.coulV = random(63, 189);
		this.coulB = random(63, 189);
	},

	redessine : function(){

		fill(this.coulR, this.coulV, this.coulB,127);
		ellipse(this.x, this.y, this.diam, this.diam);

		this.x = this.x + this.vitx;
		this.y = this.y + this.vity;
		
		if(this.x > width-this.diam/2){
			this.vitx = -1*Math.abs(this.vitx);
		}
		if(this.x < this.diam/2){
			this.vitx = Math.abs(this.vitx);
		}
		if(this.y > height-this.diam/2){
			this.vity = -1*Math.abs(this.vity);
		}
		if(this.y < this.diam/2){
			this.vity = Math.abs(this.vity);
		}
	}
}