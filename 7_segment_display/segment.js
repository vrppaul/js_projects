class Segment {
  // This class creates separate segments
  
  constructor(x, y, seg_width, seg_height, val, shift) {
    let r = 255;
    let g = 0;
    let b = 0;
    let alfa = 255 * ((val >> shift) & 1) + 35;
    noStroke();
    fill(color(r, g, b, alfa));
    rect(x, y, seg_width, seg_height, seg_height / 2);
  }
} 