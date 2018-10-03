class Flash {
  
  constructor(sw, len, x, y, angle) {
    this.sw = sw;
    this.len = len;
    this.x = x;
    this.y = y;
    this.angle = angle;
  }
  
  createflash() {
    let newX = this.x + this.len * cos(this.angle * PI / 180);
    let newY = this.y + this.len * sin(this.angle * PI / 180);
    strokeWeight(this.sw);
    line(this.x, this.y, newX, newY);
    this.sw -= 0.05;
    this.angle += random(-30, 30);
    this.x = newX;
    this.y = newY;
  } 
}  