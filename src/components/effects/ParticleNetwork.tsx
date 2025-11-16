import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
    }));

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Particle repulsion - prevent clustering
        particles.forEach((otherParticle, j) => {
          if (i === j) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = 30; // Minimum distance between particles

          if (distance < minDistance && distance > 0) {
            const force = (minDistance - distance) / minDistance;
            particle.x += (dx / distance) * force * 2;
            particle.y += (dy / distance) * force * 2;
          }
        });

        // Mouse interaction - magnetic effect (reduced strength)
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200; // Interaction range

        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance;
          // Reduced attraction force to prevent sticking
          particle.x += (dx / distance) * force * 0.8;
          particle.y += (dy / distance) * force * 0.8;
        }

        // Draw particle with dynamic glow based on mouse proximity
        const particleOpacity = distance < maxDistance
          ? 0.6 + (1 - distance / maxDistance) * 0.4 // Brighter when close to mouse
          : 0.6;
        const particleSize = distance < maxDistance
          ? particle.radius * (1 + (1 - distance / maxDistance) * 0.5) // Larger when close
          : particle.radius;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${particleOpacity})`;
        ctx.fill();

        // Add glow effect when near mouse
        if (distance < maxDistance) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(14, 165, 233, 0.8)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw connections (enhanced)
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const connectionDistance = Math.sqrt(dx * dx + dy * dy);
          const maxConnectDistance = 150; // Increased connection range

          if (connectionDistance < maxConnectDistance) {
            // Check if either particle is near mouse
            const particleNearMouse = distance < maxDistance;
            const otherDx = mouse.x - otherParticle.x;
            const otherDy = mouse.y - otherParticle.y;
            const otherDistance = Math.sqrt(otherDx * otherDx + otherDy * otherDy);
            const otherNearMouse = otherDistance < maxDistance;

            // Stronger, more visible lines
            let opacity = (1 - connectionDistance / maxConnectDistance) * 0.5;
            let lineWidth = 1;

            // Brighten and thicken lines near mouse
            if (particleNearMouse || otherNearMouse) {
              opacity = (1 - connectionDistance / maxConnectDistance) * 0.8;
              lineWidth = 2;
            }

            ctx.beginPath();
            ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
            ctx.lineWidth = lineWidth;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}
