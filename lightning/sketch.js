let saturationw = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color(40, 40, 70, saturationw));
}

async function draw() {
  
  let x = mouseX;
  let y = mouseY;
  if (mouseIsPressed) {
    saturationw = 0;
    let flash = new Flash(3, 5, x, y, random(-180, 180));
  	stroke(54, 241, 205);
    flash.createflash();
    while (flash.sw > 0) {
  		stroke(54, 241, 205);
      flash.createflash();
      await sleep(20);
      
      let randomseed = ceil(random(1, 10));
      if (randomseed == 9) {
        let newflash = new Flash(flash.sw / 2, 5, flash.x, flash.y, flash.angle + random(-30, 30));
        
        while (newflash.sw > 0) {
  				stroke(54, 241, 205);
          newflash.createflash(); 
        }
      } 
    } 
  } 
  fill(color(40, 40, 70, saturationw));
  noStroke();
  rect(0, 0, width, height);
  saturationw = (saturationw < 255) ? saturationw + 0.5 : 255;
} 