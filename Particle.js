class Particle {

  constructor(pos) {
    this.acc = createVector(0, 0.15);
    this.vel = createVector(random(-2, 2), random(-2, 0));
    this.pos = pos.copy();
    this.lifespan = 255;
    this.w = 20
    this.c = color(255);
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
      this.c = color(random(100, 200), random(0,100), random(0,50));
    }
  }

  display() {
    strokeWeight(2);
    fill(this.c, this.lifespan);
    stroke(255, this.lifespan);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }

  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}