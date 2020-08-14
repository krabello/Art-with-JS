const total_degrees = 360;
let radius = 0;

function setup() {
  frameRate(20);
  const displayWidth = window.innerWidth;
  const displayHeight = window.innerHeight;
  createCanvas(displayWidth, displayHeight);
  background(0);
  noFill();
  stroke(
    round(random(50, 150)),
    round(random(30, 40)),
    round(random(75, 85)),
    20
  );
  radius = height / 4;
}

function draw() {
  //   rotateY((frameCount / 2) * 0.0000003);
  translate(frameCount / 900, 100);

  center_x = width / 2;
  center_y = height / 3;

  beginShape();
  for (let i = 0; i <= total_degrees; i++) {
    noiseFactor = noise(i * 0.02, float(frameCount / 160));
    x = center_x + radius * cos(radians(i)) * noiseFactor;
    y = center_y + radius * sin(radians(i)) * noiseFactor;
    curveVertex(x, y);
  }
  endShape(CLOSE);

  radius -= 1;

  //   if (radius <= 0) {
  //     background(0);
  //     noFill();
  //     stroke(100, 50, 20, 30);
  //     redraw();
  //   }
}
