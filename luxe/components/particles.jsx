/* particles.jsx — Cinematic canvas background for hero
   Floating dust particles + connecting lines + mouse parallax.
   ────────────────────────────────────────────────────────── */

function ParticleCanvas() {
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(0);
  const mouseRef = React.useRef({ x: -9999, y: -9999 });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let DPR = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0, H = 0;
    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      W = parent.clientWidth;
      H = parent.clientHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // Generate particles
    const N = Math.max(40, Math.min(110, Math.floor((W * H) / 16000)));
    const parts = Array.from({ length: N }).map(() => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.5 + 0.18,
      hue: Math.random() < 0.78 ? "warm" : Math.random() < 0.5 ? "cool" : "cyan",
    }));

    function onMouse(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    }
    function onLeave() { mouseRef.current.x = -9999; mouseRef.current.y = -9999; }
    window.addEventListener("mousemove", onMouse);
    canvas.parentElement.addEventListener("mouseleave", onLeave);

    function loop() {
      ctx.clearRect(0, 0, W, H);

      // Big soft gradient orbs (parallax with mouse)
      const mx = mouseRef.current.x === -9999 ? W / 2 : mouseRef.current.x;
      const my = mouseRef.current.y === -9999 ? H / 2 : mouseRef.current.y;

      const g1 = ctx.createRadialGradient(W * 0.78 + (mx - W / 2) * 0.06, H * 0.32 + (my - H / 2) * 0.06, 0, W * 0.78, H * 0.32, Math.max(W, H) * 0.6);
      g1.addColorStop(0, "rgba(124, 92, 255, 0.22)");
      g1.addColorStop(0.45, "rgba(124, 92, 255, 0.05)");
      g1.addColorStop(1, "rgba(124, 92, 255, 0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      const g2 = ctx.createRadialGradient(W * 0.12 + (mx - W / 2) * -0.04, H * 0.78 + (my - H / 2) * -0.04, 0, W * 0.12, H * 0.78, Math.max(W, H) * 0.55);
      g2.addColorStop(0, "rgba(201, 164, 92, 0.18)");
      g2.addColorStop(0.45, "rgba(201, 164, 92, 0.04)");
      g2.addColorStop(1, "rgba(201, 164, 92, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      // Move + draw particles
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repulsion
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 18000) {
          const f = (18000 - d2) / 18000;
          const dist = Math.sqrt(d2) || 0.01;
          p.x += (dx / dist) * f * 0.8;
          p.y += (dy / dist) * f * 0.8;
        }

        // Wrap
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        const color =
          p.hue === "warm" ? `rgba(201, 164, 92, ${p.a})` :
          p.hue === "cool" ? `rgba(124, 92, 255, ${p.a})` :
                             `rgba(0, 212, 255, ${p.a})`;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connections — short-range
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i], b = parts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 9000) {
            const o = (1 - d2 / 9000) * 0.18;
            ctx.strokeStyle = `rgba(245, 241, 232, ${o})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      canvas.parentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}

Object.assign(window, { ParticleCanvas });
