/**
 * Interactive Playground Canvas
 * Provides a live interactive mini-sandbox for visitors to test canvas rendering math.
 */

export function initPlaygroundCanvas() {
  const canvas = document.getElementById('playground-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;

  // State from controls
  const state = {
    count: 60,
    speed: 1.5,
    hue: 195,
    glow: 15
  };

  const countInput = document.getElementById('pg-count');
  const speedInput = document.getElementById('pg-speed');
  const hueInput = document.getElementById('pg-hue');
  const glowInput = document.getElementById('pg-glow');

  const countVal = document.getElementById('val-count');
  const speedVal = document.getElementById('val-speed');
  const hueVal = document.getElementById('val-hue');
  const glowVal = document.getElementById('val-glow');

  let width, height;
  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = 340;
  }
  resize();
  window.addEventListener('resize', resize);

  let particles = [];

  function createParticles() {
    particles = [];
    for (let i = 0; i < state.count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * state.speed * 2,
        vy: (Math.random() - 0.5) * state.speed * 2,
        size: Math.random() * 4 + 2
      });
    }
  }

  createParticles();

  // Event Listeners for UI Sliders
  if (countInput) {
    countInput.addEventListener('input', (e) => {
      state.count = parseInt(e.target.value);
      if (countVal) countVal.textContent = state.count;
      createParticles();
    });
  }

  if (speedInput) {
    speedInput.addEventListener('input', (e) => {
      state.speed = parseFloat(e.target.value);
      if (speedVal) speedVal.textContent = state.speed.toFixed(1) + 'x';
    });
  }

  if (hueInput) {
    hueInput.addEventListener('input', (e) => {
      state.hue = parseInt(e.target.value);
      if (hueVal) hueVal.textContent = state.hue + '°';
    });
  }

  if (glowInput) {
    glowInput.addEventListener('input', (e) => {
      state.glow = parseInt(e.target.value);
      if (glowVal) glowVal.textContent = state.glow + 'px';
    });
  }

  function render() {
    ctx.fillStyle = 'rgba(8, 11, 17, 0.25)';
    ctx.fillRect(0, 0, width, height);

    ctx.shadowBlur = state.glow;
    ctx.shadowColor = `hsl(${state.hue}, 100%, 65%)`;

    particles.forEach((p) => {
      p.x += p.vx * (state.speed / 1.5);
      p.y += p.vy * (state.speed / 1.5);

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${state.hue}, 90%, 60%)`;
      ctx.fill();
    });

    animationId = requestAnimationFrame(render);
  }

  render();
}
