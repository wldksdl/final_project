class Triangle extends Particle {
  constructor(pos) {
    super(pos);
    this.w = 10;
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
      this.c = color(random(0, 50), random(50,200), random(0,100));
    }
  }

  display() {
    fill(this.c, this.lifespan);
    stroke(255, this.lifespan);
    strokeWeight(2);
    triangle(
      this.pos.x - this.w,
      this.pos.y + this.w + 7,
      this.pos.x,
      this.pos.y,
      this.pos.x + this.w,
      this.pos.y + this.w + 7
    );
  }
}