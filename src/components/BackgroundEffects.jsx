import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function BackgroundEffects() {
  const canvasRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Only show background effects on specific pages
    const allowedPages = ['/platform', '/solutions', '/about', '/contact'];
    const currentPath = location.pathname;
    
    if (!allowedPages.includes(currentPath)) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced network nodes with more visual appeal
    const nodes = [];
    for (let i = 0; i < 25; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Floating particles for additional depth
    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.4 + 0.1
      });
    }

    let animationFrameId;
    let time = 0;

    const animate = () => {
      time += 0.02;
      
      // Create gradient background starting from right bottom corner
      const gradient = ctx.createRadialGradient(
        canvas.width, canvas.height, 0,           // Start from right bottom
        canvas.width, canvas.height, canvas.width * 1.2  // Extend beyond screen
      );
      
      // Light theme gradients
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');   // Light blue glow
      gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.1)');   // Light cyan
      gradient.addColorStop(0.6, 'rgba(147, 51, 234, 0.08)'); // Light purple
      gradient.addColorStop(0.8, 'rgba(241, 245, 249, 0.05)'); // Light slate
      gradient.addColorStop(1, 'rgba(248, 250, 252, 0.02)');   // Very light slate
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add light effect overlay from right bottom
      const lightGradient = ctx.createRadialGradient(
        canvas.width * 0.9, canvas.height * 0.9, 0,
        canvas.width * 0.9, canvas.height * 0.9, canvas.width * 0.6
      );
      
      lightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');  // Bright white light
      lightGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.08)'); // Light blue tint
      lightGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');           // Fade to transparent
      
      ctx.fillStyle = lightGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw dynamic grid pattern
      const gridColor = 'rgba(59, 130, 246, 0.03)';
      const gridSize = 60 + Math.sin(time * 0.5) * 10;
      
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      
      const gridOpacity = 0.4 + Math.sin(time * 0.3) * 0.2;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.03 * gridOpacity})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.03 * gridOpacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Animate and draw network nodes
      nodes.forEach((node, index) => {
        // Update pulse animation
        node.pulse += 0.02;
        const pulseSize = Math.sin(node.pulse) * 0.5 + 1;
        
        // Light theme node colors
        const nodeColor = `rgba(59, 130, 246, ${node.opacity * 0.8})`;
        const glowColor = `rgba(59, 130, 246, ${node.opacity * 0.3})`;
        
        // Draw node glow
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * pulseSize * 3
        );
        glowGradient.addColorStop(0, glowColor);
        glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * pulseSize * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw main node
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect nodes with lines
        nodes.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            
            if (distance < 150) {
              const connectionOpacity = Math.max(0, (150 - distance) / 150) * 0.3;
              ctx.strokeStyle = `rgba(59, 130, 246, ${connectionOpacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          }
        });
      });

      // Animate and draw floating particles
      particles.forEach(particle => {
        // Move particles upward
        particle.y -= particle.speed;
        particle.x += Math.sin(time + particle.y * 0.01) * 0.2;
        
        // Reset particle when it goes off screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
        
        // Light theme particle colors
        const particleColor = `rgba(147, 51, 234, ${particle.opacity * 0.6})`;
        
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add subtle scanning line effect
      const scanLineY = (time * 50) % (canvas.height + 100) - 50;
      const scanGradient = ctx.createLinearGradient(0, scanLineY - 20, 0, scanLineY + 20);
      scanGradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
      scanGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.1)');
      scanGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
      
      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, scanLineY - 20, canvas.width, 40);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [location.pathname]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}