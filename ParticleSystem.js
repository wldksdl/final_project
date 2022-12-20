class ParticleSystem {
  constructor(pos) {
    this.origin = pos.copy();
    this.particles = [];
  }

  addParticle() {
    let r = random(1);
    if (r < 0.5) {
      this.particles.push(new Particle(this.origin));
      this.particles.push(new ParticleImage(this.origin));
      this.particles.push(new Triangle(this.origin));
    } else {
      // this.particles.push(new Triangle(this.origin));
      this.particles.push(new TriangleImage(this.origin));
      this.particles.push(new Confetti(this.origin));
      this.particles.push(new ConfettiImage(this.origin));
    }
  }

  // addParticle() {
  //   this.particles.push(new Particle(this.origin));
  //   this.particles.push(new ParticleImage(this.origin));
  //   this.particles.push(new Triangle(this.origin));
  //   this.particles.push(new TriangleImage(this.origin));
  //   this.particles.push(new Confetti(this.origin));
  //   this.particles.push(new ConfettiImage(this.origin));
  // }

  run() {
    for (let particle of this.particles) {
      particle.run();
    }

    this.particles = this.particles.filter((particle) => !particle.isDead());
  }
}
