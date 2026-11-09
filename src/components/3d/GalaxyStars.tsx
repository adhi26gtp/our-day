import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface GalaxyStarsProps {
  count?: number;
}

export const GalaxyStars: React.FC<GalaxyStarsProps> = ({ count = 900 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color('#FFF7FC'), // Soft white
      new THREE.Color('#E8C58A'), // Champagne gold
      new THREE.Color('#F2A7C6'), // Romantic rose
      new THREE.Color('#C7A5F5'), // Lavender
      new THREE.Color('#A87BD6'), // Soft violet
    ];

    const arms = 3;
    const radius = 9;

    for (let i = 0; i < count; i++) {
      // 70% in spiral arms, 30% in ambient cosmic cloud
      if (Math.random() < 0.75) {
        const r = Math.pow(Math.random(), 1.5) * radius + 0.8;
        const armAngle = ((i % arms) * 2 * Math.PI) / arms;
        const spinAngle = r * 0.6;
        
        const randomX = (Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.8);
        const randomY = (Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.8);
        const randomZ = (Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.8);

        pos[i * 3] = Math.cos(armAngle + spinAngle) * r + randomX;
        pos[i * 3 + 1] = randomY * 0.6;
        pos[i * 3 + 2] = Math.sin(armAngle + spinAngle) * r + randomZ;
      } else {
        // Ambient background stardust
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random()) * (radius * 1.2);
        const sinPhi = Math.sin(phi);

        pos[i * 3] = r * sinPhi * Math.cos(theta);
        pos[i * 3 + 1] = r * sinPhi * Math.sin(theta) * 0.5;
        pos[i * 3 + 2] = r * Math.cos(phi);
      }

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    // Slow cosmic galaxy spiral rotation
    pointsRef.current.rotation.y = t * 0.05;
    pointsRef.current.rotation.x = Math.sin(t * 0.03) * 0.08 + 0.2;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

