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
      this.c = color(random(0, 100), random(0, 50), random(50, 200));

      this.synth.triggerAttack("C5");
      this.synth.triggerRelease(random(0.2, 0.8));
    }
  }

  display() {
    fill(this.c, this.lifespan);
    stroke(255, this.lifespan);
    strokeWeight(2);
    rect(this.pos.x, this.pos.y, this.w, this.w);
  }
}
