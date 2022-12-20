class Triangle extends Particle {
  constructor(pos) {
    super(pos);
    this.w = 10;
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
      this.c = color(random(50, 150), random(200,255), random(50,150), this.lifespan);
      
      this.synth.triggerAttack("E5");
      this.synth.triggerRelease(random(0.1, 0.8));
    }
  }

  display() {
    rectMode(CENTER);
    fill(this.c, this.lifespan);
    stroke(255, this.lifespan);
    strokeWeight(2);
    //push();
    //translate(this.pos.x, this.pos.y);
    //let theta = map(this.pos.x, 0, width, 0, TWO_PI * 20);
    //rotate(PI);
    triangle(
      this.pos.x - this.w,
      this.pos.y + this.w + 7,
      this.pos.x,
      this.pos.y,
      this.pos.x + this.w,
      this.pos.y + this.w + 7
    );
    //pop();
  }
}
