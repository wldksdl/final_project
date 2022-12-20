class Triangle extends Particle {
  
  constructor(pos) {
    super(pos);
    this.w = 12;
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
    }
  }

  display() {
    fill(255, this.lifespan);
    stroke(255, this.lifespan);
    strokeWeight(2);
    triangle(0,0,0,0,0,0);
  }
}


