let particleSystem;

function preload() {
  smile = loadImage("smile.png");
  angry = loadImage("angry.png");
  soso = loadImage("soso.png");
}

function setup() {
  createCanvas(500, 600);
  particleSystem = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(50);
  let txt = "Emotional Change";
  fill(255);
  textSize(37);
  textAlign(CENTER);
  text(txt, 0, 100, 500, 300);
  particleSystem.run();
}

function mouseDragged(e) {
  particleSystem.origin = createVector(mouseX, mouseY);
  particleSystem.addParticle();
  return false;
}
