import { useEffect, useRef } from "react";

export default function MouseTrailCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resize();
        window.addEventListener("resize", resize);

        const rootStyles = getComputedStyle(document.documentElement);

        const colors = [
            rootStyles.getPropertyValue("--basePink").trim(),
            rootStyles.getPropertyValue("--transitionPink").trim(),
            rootStyles.getPropertyValue("--endGreen").trim(),
        ];

        const circles = [];
        let lastX = null;
        let lastY = null;
        const spacing = 28;

        function onMouseMove(e) {
            if (lastX === null) {
                lastX = e.clientX;
                lastY = e.clientY;
                return;
            }

            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > spacing) {
                lastX = e.clientX;
                lastY = e.clientY;

                circles.push({
                    x: e.clientX,
                    y: e.clientY,
                    radius: 10 + Math.random() * 30,
                    lineWidth: 1.5 + Math.random() * 3,
                    alpha: 0.6,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        }

        window.addEventListener("mousemove", onMouseMove);

        let rafId;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = circles.length - 1; i >= 0; i--) {
                const c = circles[i];
                c.alpha *= 0.95;
                c.radius *= 0.99;

                if (c.alpha < 0.02) {
                    circles.splice(i, 1);
                    continue;
                }

                ctx.save();
                ctx.beginPath();
                ctx.globalAlpha = c.alpha; // control fading separately to avoid double-darkening
                ctx.strokeStyle = c.color; // keep base color at full strength
                ctx.lineWidth = c.lineWidth;
                ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            }

            rafId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 1,
            }}
        />
    );
}
