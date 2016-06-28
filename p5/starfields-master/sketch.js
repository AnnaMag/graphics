var s;
var starsArray = [];

function setup() {
	createCanvas(
		window.innerWidth,
		window.innerHeight
	);
	background(51);
	// rect(xcoord, ycoord, width)
	for (var i = 0; i <= 50; i++) {
		s = new Star();
		starsArray.push(s);
	}

	s = new Star();
}
 
function draw() {
	//background(200, 0, 255)

	//fill(0, 200, 0);
	

	//fill(123);
	//stroke(123);
	background(51);
	for (var i = 0; i < starsArray.length; i ++) {
		s = starsArray[i];
		s.update();
		s.display();
	}

	//squaresArray.foreach(function(square)) {
	//	fill(square.color);
	//	rect(square.x, square.y, square.width, square.height);
	//}
}

var Star = function() {

	this.pos = createVector(random(window.innerWidth), random(window.innerHeight));
	this.plane = random(5);
	this.speed = 0.1;

	this.update = function() {
		if (this.pos.x < window.innerWidth) {
			this.pos.x = this.pos.x  + this.speed * this.plane;
		} else {
			this.pos.x = 0;
			this.pos.y = random(window.innerHeight);
		}
	}

	this.display = function(){
		noStroke();
		//strokeWeight(2);
		fill(255/5*this.plane);
		//fill(random(255));
		ellipse(this.pos.x, this.pos.y, 10, 10);
	}
}