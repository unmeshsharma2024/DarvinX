import React, { useState, useEffect, useRef } from 'react';
import { Shield, Server, Network, Lock, Brain, Cloud, Eye, UserCheck, Database, AlertTriangle } from 'lucide-react';

const services = [
  { name: 'Threat Intelligence', icon: Eye, color: 'from-red-500 to-orange-500', angle: 0 },
  { name: 'Endpoint Security', icon: Server, color: 'from-orange-500 to-yellow-500', angle: 36 },
  { name: 'Network Security', icon: Network, color: 'from-green-500 to-emerald-500', angle: 72 },
  { name: 'Data Protection', icon: Lock, color: 'from-teal-500 to-cyan-500', angle: 108 },
  { name: 'AI Security', icon: Brain, color: 'from-blue-500 to-indigo-500', angle: 144 },
  { name: 'Cloud Security', icon: Cloud, color: 'from-indigo-500 to-purple-500', angle: 180 },
  { name: 'Behavioral Analytics', icon: Database, color: 'from-purple-500 to-pink-500', angle: 216 },
  { name: 'Zero Trust', icon: Shield, color: 'from-pink-500 to-rose-500', angle: 252 },
  { name: 'Identity Management', icon: UserCheck, color: 'from-cyan-500 to-blue-500', angle: 288 },
  { name: 'Incident Response', icon: AlertTriangle, color: 'from-yellow-500 to-orange-500', angle: 324 },
];

export default function Globe3D() {
  const [activeService, setActiveService] = useState(0);
  const [threatsNeutralized, setThreatsNeutralized] = useState(1247);
  const [asteroids, setAsteroids] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const animationRef = useRef();

  // Service rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Asteroid simulation
  useEffect(() => {
    const spawnAsteroid = () => {
      const isFromLeft = Math.random() > 0.5;
      const newAsteroid = {
        id: Date.now() + Math.random(),
        x: isFromLeft ? -50 : 550,
        y: Math.random() * 400 + 50,
        targetX: 250,
        targetY: 250,
        speed: Math.random() * 1.5 + 0.5,
        size: Math.random() * 12 + 8,
        type: ['Malware', 'Phishing', 'DDoS', 'Ransomware', 'Data Breach'][Math.floor(Math.random() * 5)],
        color: ['#ef4444', '#f97316', '#eab308', '#dc2626', '#7c3aed'][Math.floor(Math.random() * 5)]
      };
      
      setAsteroids(prev => [...prev.slice(-8), newAsteroid]);
    };

    const spawnInterval = setInterval(spawnAsteroid, Math.random() * 4000 + 3000);

    const animate = () => {
      setAsteroids(prev => prev.map(asteroid => {
        const dx = asteroid.targetX - asteroid.x;
        const dy = asteroid.targetY - asteroid.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100 && Math.random() > 0.2) {
          // Intercepted
          setThreatsNeutralized(count => count + 1);
          return null;
        }
        
        if (distance < 5) {
          return null; // Reached target
        }
        
        return {
          ...asteroid,
          x: asteroid.x + (dx / distance) * asteroid.speed,
          y: asteroid.y + (dy / distance) * asteroid.speed
        };
      }).filter(Boolean));
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      clearInterval(spawnInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[500px] h-[500px] perspective-1500">
      {/* Mouse glow effect */}
      <div 
        className="absolute w-96 h-96 pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(6,182,212,0.1) 40%, transparent 70%)'
        }}
      />

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-80 h-80 border border-blue-500/25 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
        <div className="absolute w-96 h-96 border border-blue-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }} />
        <div className="absolute w-[480px] h-[480px] border border-blue-500/15 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
      </div>

      {/* Satellites */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80 animate-spin-slow" style={{ animationDuration: '60s' }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = index === activeService;
            return (
              <div
                key={service.name}
                className="absolute w-10 h-10 -ml-5 -mt-5 animate-spin-reverse"
                style={{
                  animationDuration: '60s',
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${service.angle}deg) translateY(-160px)`
                }}
              >
                <div className={`
                  w-10 h-10 rounded-full border-4 border-white/20 flex items-center justify-center
                  transition-all duration-500 bg-gradient-to-br ${service.color}
                  ${isActive ? 'scale-125 shadow-lg shadow-current animate-pulse' : 'scale-100'}
                `}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                {/* {isActive && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-slate-800/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                      {service.name}
                    </div>
                  </div>
                )} */}
              </div>
            );
          })}
        </div>
      </div>

      {/* Central Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-slate-900 animate-pulse shadow-2xl shadow-blue-500/50">
          {/* Globe grid lines */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={`lat-${i}`}
                className="absolute left-0 right-0 border-t border-cyan-400/30"
                style={{ top: `${(i + 1) * 12.5}%` }}
              />
            ))}
            {[...Array(12)].map((_, i) => (
              <div
                key={`lng-${i}`}
                className="absolute top-0 bottom-0 border-l border-cyan-400/30"
                style={{ 
                  left: '50%',
                  transform: `rotate(${i * 30}deg)`,
                  transformOrigin: '0 50%'
                }}
              />
            ))}
          </div>
          
          {/* Central shield */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield className="w-16 h-16 text-cyan-300 animate-float" style={{
              filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))'
            }} />
          </div>
        </div>
      </div>

      {/* Asteroids */}
      {asteroids.map(asteroid => (
        <div
          key={asteroid.id}
          className="absolute animate-spin"
          style={{
            left: asteroid.x,
            top: asteroid.y,
            width: asteroid.size,
            height: asteroid.size,
            backgroundColor: asteroid.color,
            borderRadius: '50%',
            boxShadow: `0 0 10px ${asteroid.color}`,
            animationDuration: '2s'
          }}
        />
      ))}

      {/* Status Panel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg px-4 py-3 border border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
            {/* <div>
              <div className="text-sm font-medium text-white">Advanced Defense Grid Active</div>
              <div className="text-xs text-slate-400">
                Incident Response - Rapid threat response and remediation
              </div>
              <div className="text-xs text-green-400 font-semibold">
                Threats Neutralized: {threatsNeutralized.toLocaleString()}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
