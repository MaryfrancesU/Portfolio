import { useEffect, useRef } from 'react';

export default function AmbientCircles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    const colors = [
      'rgba(247,92,170,1)',
      'rgba(255,105,180,1)',
      'rgba(0,255,145,1)'
    ];

    const circles = [];

    function spawnCircle() {
      const outlined = Math.random() < 0.45;
      circles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: 0,
        maxRadius: outlined ? 900 + Math.random() * 1200 : 300 + Math.random() * 600,
        growth: outlined ? 0.12 + Math.random() * 0.18 : 0.08 + Math.random() * 0.12,
        alpha: 0,
        fadeIn: true,
        outlined,
        lineWidth: outlined ? 1 + Math.random() * 2 : 0,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const spawnInterval = setInterval(() => {
      if (circles.length < 6) spawnCircle();
    }, 2500);

    let rafId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = circles.length - 1; i >= 0; i--) {
        const c = circles[i];
        c.radius += c.growth;

        if (c.fadeIn) {
          c.alpha += 0.002;
          if (c.alpha >= 0.15) c.fadeIn = false;
        } else {
          c.alpha -= 0.0006;
        }

        if (c.alpha <= 0) {
          circles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = c.alpha;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);

        if (c.outlined) {
          ctx.strokeStyle = c.color;
          ctx.lineWidth = c.lineWidth;
          ctx.stroke();
        } else {
          ctx.fillStyle = c.color;
          ctx.fill();
        }

        ctx.restore();
      }

      rafId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      clearInterval(spawnInterval);
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -2,
      }}
    />
  );
}
