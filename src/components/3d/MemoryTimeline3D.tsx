import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

interface MemoryTimeline3DProps {
  activeYear: number | null; // 1, 2, 3 or null for all
  onSelectYear: (year: number) => void;
}

const MilestoneOrb: React.FC<{
  year: number;
  position: [number, number, number];
  isActive: boolean;
  onSelect: () => void;
}> = ({ year, position, isActive, onSelect }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const colors = {
    1: '#F2A7C6', // Rose
    2: '#C7A5F5', // Lavender
    3: '#E8C58A', // Gold
  };

  const orbColor = colors[year as keyof typeof colors] || '#E8C58A';

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;

    // Gentle float
    meshRef.current.position.y = position[1] + Math.sin(t * 2 + year) * 0.08;

    // Ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.8;
      ringRef.current.rotation.y = t * 0.5;
    }

    // Scale up if active
    const targetScale = isActive ? 1.25 : 1.0;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 4);

    if (lightRef.current) {
      lightRef.current.intensity = isActive ? 2.5 : 1.2;
    }
  });

  return (
    <group position={position}>
      {/* Clickable Milestone Orb */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        onPointerOver={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default';
        }}
      >
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshPhysicalMaterial
          color={orbColor}
          emissive={orbColor}
          emissiveIntensity={isActive ? 0.8 : 0.4}
          roughness={0.15}
          metalness={0.2}
          transmission={0.6}
          ior={1.5}
          clearcoat={1.0}
        />
      </mesh>

      {/* Orbiting Orbital Ring */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[0.55, 0.015, 16, 64]} />
        <meshStandardMaterial
          color={orbColor}
          emissive={orbColor}
          emissiveIntensity={0.6}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Glow Light */}
      <pointLight ref={lightRef} color={orbColor} intensity={1.5} distance={3} />
    </group>
  );
};

export const MemoryTimeline3D: React.FC<MemoryTimeline3DProps> = ({ activeYear, onSelectYear }) => {
  const linePoints = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.8, -0.2, 0),
      new THREE.Vector3(0, 0.2, 0.3),
      new THREE.Vector3(2.8, -0.2, 0),
    ]);
    return curve.getPoints(50);
  }, []);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(linePoints);
  }, [linePoints]);

  const lineObject = useMemo(() => {
    const mat = new THREE.LineBasicMaterial({
      color: '#E8C58A',
      transparent: true,
      opacity: 0.6,
      linewidth: 2,
    });
    return new THREE.Line(lineGeometry, mat);
  }, [lineGeometry]);

  return (
    <div className="relative w-full h-[220px] sm:h-[260px] rounded-3xl overflow-hidden glass-panel border border-[#E8C58A]/20 shadow-gold-glow mb-12">
      <Canvas
        camera={{ position: [0, 0.2, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 3]} intensity={1.5} color="#FFE8BD" />
        <directionalLight position={[-3, 2, -2]} intensity={1.2} color="#F2A7C6" />

        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          {/* Luminous Connecting Timeline Ribbon */}
          <primitive object={lineObject} />

          {/* 3 Milestone Orbs */}
          <MilestoneOrb
            year={1}
            position={[-2.4, 0, 0]}
            isActive={activeYear === 1}
            onSelect={() => onSelectYear(1)}
          />
          <MilestoneOrb
            year={2}
            position={[0, 0.25, 0.2]}
            isActive={activeYear === 2}
            onSelect={() => onSelectYear(2)}
          />
          <MilestoneOrb
            year={3}
            position={[2.4, 0, 0]}
            isActive={activeYear === 3}
            onSelect={() => onSelectYear(3)}
          />
        </Float>
      </Canvas>

      {/* Interactive Helper Text */}
      <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#E8C58A] font-semibold bg-[#10091C]/80 px-4 py-1 rounded-full border border-white/10 backdrop-blur-md">
          Interactive: Click an orb to filter by year
        </span>
      </div>
    </div>
  );
};
