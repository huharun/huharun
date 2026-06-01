/* ======================== STARS LOGIC ======================== */
export function initStars() {
  const canvas = document.getElementById('star-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const LAYERS = [
    { count: 120, r: [0.5, 1.2], a: [0.2, 0.5], speed: 0.0003 },
    { count: 60,  r: [1.0, 1.8], a: [0.4, 0.7], speed: 0.0005 },
    { count: 25,  r: [1.5, 2.5], a: [0.6, 0.9], speed: 0.0008 },
  ];
  let stars = [];
  let W = 0, H = 0;

  function rand(min, max) { return min + Math.random() * (max - min); }

  function build() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    stars = [];
    LAYERS.forEach(layer => {
      for (let i = 0; i < layer.count; i++) {
        stars.push({
          x:       rand(0, W),
          y:       rand(0, H),
          r:       rand(...layer.r),
          baseA:   rand(...layer.a),
          a:       rand(...layer.a),
          phase:   rand(0, Math.PI * 2),
          speed:   layer.speed,
          hue:     Math.random() < 0.15 ? (Math.random() < 0.5 ? '180,210,255' : '220,170,255') : '255,255,255',
        });
      }
    });
  }

  let lastT = 0;
  const FPS_CAP = 24;
  const INTERVAL = 1000 / FPS_CAP;

  function draw(t) {
    requestAnimationFrame(draw);
    if (t - lastT < INTERVAL) return;
    lastT = t;

    ctx.clearRect(0, 0, W, H);
    const now = t * 0.001;
    const isLight = document.body.classList.contains('light-mode');

    stars.forEach(s => {
      s.a = s.baseA + Math.sin(now * s.speed * 6000 + s.phase) * (s.baseA * 0.4);
      s.a = Math.max(0.05, Math.min(1, s.a));

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);

      let colorStr = s.hue;
      if (isLight) {
        // Render dark slate grey or dark blue stars in light mode
        colorStr = s.hue === '255,255,255' ? '44,44,46' : '0,122,255';
      }

      ctx.fillStyle = `rgba(${colorStr},${s.a.toFixed(3)})`;
      ctx.fill();
    });
  }

  build();
  window.addEventListener('resize', build, { passive: true });
  requestAnimationFrame(draw);
}
