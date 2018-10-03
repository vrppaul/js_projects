let saturationw = 255;
function setup() {
  createCanvas(600, 400);
	let mycolor = color(40, 40, 100, saturationw);
	fill(mycolor);
	noStroke();
	rect(0, 0, width, height);
}

function draw() {
	let mycolor = color(40, 40, 100, saturationw);
	fill(mycolor);
	noStroke();
	rect(0, 0, width, height);
	saturationw += 1;
}

function mousePressed() {
	let sw = 3 + 1;
	let len = 50 + 10;
	createFlash(mouseX, mouseY, sw, len, random(-180, 180));
	saturationw = 0;
}	

function createFlash(x, y, sw, len, angle) {
	let linesNumber = ceil(random(5));
	
	stroke(54, 241, 205);
	
	if (len == 10) {
		strokeWeight(sw);
		for (let i = 0; i < 2; i++) {
			let newX = x + len * cos(random(1, 2) * angle * PI / 180);
			let newY = y + len * sin(random(1, 2) * angle * PI / 180);
			line(x, y, newX, newY); 
		}	
	} else {
		len -= 10;
		angle += random(-45, 45);
		sw -= 0.5;
		strokeWeight(sw);
		for (let i = 0; i < 2; i++) {
			let newX = x + len * cos(random(1, 2) * angle * PI / 180);
			let newY = y + len * sin(random(1, 2) * angle * PI / 180);
			line(x, y, newX, newY); 
			setTimeout(createFlash(newX, newY, sw, len, angle), 3000);
		}		
	}		
}	