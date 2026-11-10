
  function setup() {
  createCanvas(800, 800);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
}

function draw() {
  background(255,255,255);
  fill(255,255,255);
  stroke(50,100,200);
  strokeWeight(20);
  // head
  circle(400,400,400);
  // eyes
  circle(500,400,200);
  circle(300,400,200);
  stroke (50,100,200);
  // pupils
   circle(480,400,5);
     circle(330,400,5);
  // brows + mouth
  line(250, 290, 380, 290);
    line (200, 372, 595, 370);
  line(550, 290, 420, 290);
    line(420, 525, 450, 525);
}