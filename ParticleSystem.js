class ParticleSystem {
  constructor(pos) {
    this.origin = pos.copy();
    this.particles = [];
  }

  addParticle() {
    let r = random(1);
    if (r <= 0.3) {
      this.particles.push(new Particle(this.origin));
    }
    if (0.3 < r <= 0.6) {
      this.particles.push(new Triangle(this.origin));
    }
    if (0.6 < r <= 1) {
      this.particles.push(new Confetti(this.origin));
    }
  }

  run() {
    for (let particle of this.particles) {
      particle.run();
    }

    this.particles = this.particles.filter((particle) => !particle.isDead());
  }
}
