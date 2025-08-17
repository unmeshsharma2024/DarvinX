import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Server,
  Network,
  Lock,
  Brain,
  Cloud,
  Eye,
  UserCheck,
  Database,
  AlertTriangle
} from 'lucide-react';

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
  { name: 'Incident Response', icon: AlertTriangle, color: 'from-yellow-500 to-orange-500', angle: 324 }
];

export default function Globe3D() {
  const [activeService, setActiveService] = useState(0);
  const [threatsNeutralized, setThreatsNeutralized] = useState(1247);
  const [asteroids, setAsteroids] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const animationRef = useRef();

  // Service rotation (for tooltip/status text)
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

      setAsteroids((prev) => [...prev.slice(-8), newAsteroid]);
    };

    const spawnInterval = setInterval(spawnAsteroid, Math.random() * 4000 + 3000);

    const animate = () => {
      setAsteroids((prev) =>
        prev
          .map((asteroid) => {
            const dx = asteroid.targetX - asteroid.x;
            const dy = asteroid.targetY - asteroid.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100 && Math.random() > 0.2) {
              setThreatsNeutralized((count) => count + 1);
              return null;
            }

            if (distance < 5) {
              return null;
            }

            return {
              ...asteroid,
              x: asteroid.x + (dx / distance) * asteroid.speed,
              y: asteroid.y + (dy / distance) * asteroid.speed
            };
          })
          .filter(Boolean)
      );

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

  const radius = 120; // orbit distance from center

  return (
    <div ref={containerRef} className="relative w-[500px] h-[500px] perspective-1500">
      {/* Mouse glow */}
      <div
        className="absolute w-96 h-96 pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background:
            'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(6,182,212,0.15) 30%, rgba(147,51,234,0.1) 60%, transparent 80%)'
        }}
      />

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute w-64 h-64 rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, transparent, rgba(59,130,246,0.3), transparent, rgba(6,182,212,0.3), transparent)',
            animation: 'spin 20s linear infinite'
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full"
          style={{
            background:
              'conic-gradient(from 180deg, transparent, rgba(147,51,234,0.25), transparent, rgba(59,130,246,0.25), transparent)',
            animation: 'spin 25s linear infinite reverse'
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background:
              'conic-gradient(from 90deg, transparent, rgba(6,182,212,0.2), transparent, rgba(147,51,234,0.2), transparent)',
            animation: 'spin 30s linear infinite'
          }}
        />
      </div>

      {/* Satellites orbit */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transform: 'translate(-50%, -50%)',
            transformOrigin: 'center',
            animation: 'spin 60s linear infinite'
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = index === activeService;

            return (
              <div
                key={service.name}
                className="absolute"
                style={{
                  transform: `rotate(${service.angle}deg) translateX(${radius}px)`,
                  transformOrigin: '0 0'
                }}
              >
                <div
                  className={`
                    relative w-12 h-12 -ml-6 -mt-6 
                    rounded-full border-2 border-white/30 flex items-center justify-center
                    transition-all duration-700 bg-gradient-to-br ${service.color}
                    ${isActive ? 'scale-150 shadow-2xl shadow-current ring-4 ring-white/20' : 'scale-100'}
                    hover:scale-110
                    animate-spinIcon
                  `}
                >
                  <Icon className="w-6 h-6 text-white drop-shadow-lg" />

                  {isActive && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
                      <div className="bg-slate-800/95 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-white border border-slate-600/50 shadow-xl">
                        {service.name}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Central Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 animate-pulse shadow-2xl shadow-blue-500/50 border border-blue-400/30">
          {/* Globe lines */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={`lat-${i}`}
                className="absolute left-0 right-0 border-t border-cyan-400/40"
                style={{ top: `${(i + 1) * 12.5}%` }}
              />
            ))}
            {[...Array(12)].map((_, i) => (
              <div
                key={`lng-${i}`}
                className="absolute top-0 bottom-0 border-l border-cyan-400/40"
                style={{
                  left: '50%',
                  transform: `rotate(${i * 30}deg)`,
                  transformOrigin: '0 50%'
                }}
              />
            ))}
          </div>

          {/* Shield */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
              <Shield
                className="relative w-20 h-20 text-cyan-300"
                style={{ filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.9))' }}
              />
            </div>
          </div>

          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping" style={{ animationDuration: '3s' }} />
          <div
            className="absolute inset-0 rounded-full border border-blue-400/15 animate-ping"
            style={{ animationDuration: '4s', animationDelay: '1s' }}
          />
        </div>
      </div>

      {/* Asteroids */}
      {asteroids.map((asteroid) => (
        <div key={asteroid.id} className="relative">
          <div
            className="absolute w-8 h-8 rounded-full opacity-30 animate-pulse"
            style={{
              left: asteroid.x - 4,
              top: asteroid.y - 4,
              backgroundColor: asteroid.color,
              filter: 'blur(2px)',
              animationDuration: '1s'
            }}
          />
          <div
            className="absolute animate-spin"
            style={{
              left: asteroid.x,
              top: asteroid.y,
              width: asteroid.size,
              height: asteroid.size,
              backgroundColor: asteroid.color,
              borderRadius: '50%',
              boxShadow: `0 0 20px ${asteroid.color}, 0 0 40px ${asteroid.color}`,
              animationDuration: '2s'
            }}
          />
        </div>
      ))}

      {/* Animations */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes spinIcon { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        .animate-spinIcon {
          animation: spinIcon 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
