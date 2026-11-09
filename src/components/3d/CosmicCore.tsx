import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface CosmicCoreProps {
  scale?: number;
}

export const CosmicCore: React.FC<CosmicCoreProps> = ({ scale = 1 }) => {
  const coreGroup = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);
  const glowLight = useRef<THREE.PointLight>(null);

  // Materials for the celestial central object
  const materials = useMemo(() => {
    return {
      core: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#FFF7FC'),
        emissive: new THREE.Color('#E8C58A'),
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.7,
        ior: 1.6,
        thickness: 0.8,
        clearcoat: 1.0,
      }),
      ringGold: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#E8C58A'),
        emissive: new THREE.Color('#C8A060'),
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: 0.85,
      }),
      ringRose: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#F2A7C6'),
        emissive: new THREE.Color('#9B3B60'),
        emissiveIntensity: 0.35,
        roughness: 0.3,
        metalness: 0.6,
        transparent: true,
        opacity: 0.8,
      }),
      ringLavender: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#C7A5F5'),
        emissive: new THREE.Color('#6F42A6'),
        emissiveIntensity: 0.4,
        roughness: 0.3,
        metalness: 0.5,
        transparent: true,
        opacity: 0.75,
      }),
    };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (!coreGroup.current) return;

    // Gentle levitation & pulsation
    coreGroup.current.position.y = Math.sin(t * 1.2) * 0.15;
    
    // Core spin
    coreGroup.current.rotation.y = t * 0.25;

    // Rings rotating on independent orbital planes
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.4;
      ring1.current.rotation.y = t * 0.3;
    }
    if (ring2.current) {
      ring2.current.rotation.y = -t * 0.35;
      ring2.current.rotation.z = t * 0.25;
    }
    if (ring3.current) {
      ring3.current.rotation.x = -t * 0.2;
      ring3.current.rotation.z = -t * 0.45;
    }

    // Dynamic light breathing
    if (glowLight.current) {
      glowLight.current.intensity = 2.2 + Math.sin(t * 2.5) * 0.6;
    }

    // Interactive mouse tilt
    const targetX = -state.pointer.y * 0.2;
    const targetY = state.pointer.x * 0.3;
    coreGroup.current.rotation.x = THREE.MathUtils.damp(coreGroup.current.rotation.x, targetX, 3, delta);
    coreGroup.current.rotation.z = THREE.MathUtils.damp(coreGroup.current.rotation.z, -targetY * 0.5, 3, delta);
  });

  return (
    <group ref={coreGroup} scale={scale}>
      {/* Central Radiant Stellar Orb */}
      <mesh material={materials.core}>
        <sphereGeometry args={[0.9, 48, 48]} />
      </mesh>

      {/* Internal Core Light */}
      <pointLight
        ref={glowLight}
        color="#FFE8BD"
        intensity={2.5}
        distance={6}
        decay={2}
      />

      {/* Secondary Rose Corona Fill */}
      <pointLight
        color="#F2A7C6"
        intensity={1.8}
        distance={4}
        position={[0, 0.5, 0]}
      />

      {/* Inner Radiant Starlight Core */}
      <mesh>
        <sphereGeometry args={[0.35, 24, 24]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>

      {/* Orbital Celestial Ring 1 (Champagne Gold) */}
      <mesh ref={ring1} material={materials.ringGold}>
        <torusGeometry args={[1.5, 0.025, 16, 100]} />
      </mesh>

      {/* Orbital Celestial Ring 2 (Romantic Rose) */}
      <mesh ref={ring2} material={materials.ringRose}>
        <torusGeometry args={[1.85, 0.02, 16, 100]} />
      </mesh>

      {/* Orbital Celestial Ring 3 (Lavender) */}
      <mesh ref={ring3} material={materials.ringLavender}>
        <torusGeometry args={[2.2, 0.018, 16, 100]} />
      </mesh>
    </group>
  );
};

