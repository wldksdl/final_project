class Particle {

  constructor(pos) {
    this.acc = createVector(0, 0.15);
    this.vel = createVector(random(-2, 2), random(-2, 0));
    this.pos = pos.copy();
    this.lifespan = 255;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2;
    //this.checkEdge();
  }
  
  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }
  }

  display() {
    strokeWeight(2);
    stroke(255, this.lifespan);
    fill(255, this.lifespan);
    ellipse(this.pos.x, this.pos.y, 12, 12);
  }

  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}