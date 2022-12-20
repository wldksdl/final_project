class Confetti extends Particle {
  constructor(pos) {
    super(pos);
    this.w = 20;
    this.c = 255;
    this.synth = new p5.MonoSynth();
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2;
    this.checkEdge();
  }

  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
      this.w = 40;
      this.c = color(
        random(50, 150),
        random(50, 150),
        random(200, 255),
        this.lifespan
      );

      this.synth.triggerAttack("C5");
      this.synth.triggerRelease(random(0.2, 0.8));
    }
  }

  display() {
    rectMode(CENTER);
    fill(this.c, this.lifespan);
    stroke(255, this.lifespan);
    strokeWeight(2);
    rect(this.pos.x, this.pos.y, this.w, this.w);
  }
}
