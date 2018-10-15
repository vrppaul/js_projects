let bits = [0x7E, 0x30, 0x6D, 0x79, 0x33,
            0x5B, 0x5F, 0x70, 0x7F, 0x7B];
let index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  background(20);
  createSegments(bits[index]);
  index = (index + 1) % bits.length;
}

function createSegments(value) {
  let seg_width = width / 12;
  let seg_length = width / 60;
  // A segment
  let segA = new Segment(width / 2 - seg_width / 2,
                         height / 2 - (seg_length * 1.5 + seg_width),
      									 seg_width, seg_length,
      									 value, 6);
  // B segment
  let segB = new Segment(width / 2 + seg_width / 2,
                         height / 2 - (seg_length / 2 + seg_width),
      									 seg_length, seg_width,
      									 value, 5);
  // C segment
  let segС = new Segment(width / 2 + seg_width / 2,
                         height / 2 + (seg_length / 2),
      									 seg_length, seg_width,
      									 value, 4);
  // D segment
  let segD = new Segment(width / 2 - seg_width / 2,
                         height / 2 + (seg_length / 2 + seg_width),
      									 seg_width, seg_length,
      									 value, 3);
  // E segment
  let segE = new Segment(width / 2 - (seg_width / 2 + seg_length),
                         height / 2 + (seg_length / 2),
      									 seg_length, seg_width,
      									 value, 2);
  // F segment
  let segF = new Segment(width / 2 - (seg_width / 2 + seg_length),
                         height / 2 - (seg_length / 2 + seg_width),
      									 seg_length, seg_width,
      									 value, 1);
  // G segment
  let segG = new Segment(width / 2 - seg_width / 2,
                         height / 2 - seg_length / 2,
      									 seg_width, seg_length,
      									 value, 0);
}