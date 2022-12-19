class ParticleSystem {

  constructor(pos) {
    this.origin = pos.copy();
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  run() {
    for (let particle of this.particles) {
      particle.run();
    }

    this.particles = this.particles.filter(particle => !particle.isDead());
  }
}