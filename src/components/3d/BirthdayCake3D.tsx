import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface BirthdayCake3DProps {
  isBlown: boolean;
  onBlowCandles: () => void;
}

export const BirthdayCake3D: React.FC<BirthdayCake3DProps> = ({ isBlown, onBlowCandles }) => {
  const cakeGroup = useRef<THREE.Group>(null);
  const flame1 = useRef<THREE.Mesh>(null);
  const flame2 = useRef<THREE.Mesh>(null);
  const flame3 = useRef<THREE.Mesh>(null);
  const flameLight1 = useRef<THREE.PointLight>(null);
  const flameLight2 = useRef<THREE.PointLight>(null);
  const flameLight3 = useRef<THREE.PointLight>(null);

  // Materials
  const materials = useMemo(() => {
    return {
      stand: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#E8C58A'),
        roughness: 0.2,
        metalness: 0.85,
      }),
      tierBottom: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#2C183B'),
        roughness: 0.35,
        metalness: 0.1,
        clearcoat: 0.4,
      }),
      tierMiddle: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#F2A7C6'),
        roughness: 0.3,
        metalness: 0.05,
        clearcoat: 0.5,
      }),
      tierTop: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#FFF7FC'),
        roughness: 0.25,
        metalness: 0.1,
        clearcoat: 0.6,
      }),
      goldTrim: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#E8C58A'),
        roughness: 0.2,
        metalness: 0.9,
      }),
      candle: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#FFF7FC'),
        roughness: 0.3,
        metalness: 0.1,
      }),
      flame: new THREE.MeshBasicMaterial({
        color: new THREE.Color('#FFE8BD'),
      }),
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!cakeGroup.current) return;

    // Gentle floating rotation
    cakeGroup.current.rotation.y = t * 0.2;
    cakeGroup.current.position.y = Math.sin(t * 1.5) * 0.08 - 0.2;

    // Candle flame flicker animation if not blown
    if (!isBlown) {
      const flicker1 = Math.sin(t * 15) * 0.15 + Math.cos(t * 23) * 0.1;
      const flicker2 = Math.sin(t * 18 + 1) * 0.15 + Math.cos(t * 20) * 0.1;
      const flicker3 = Math.sin(t * 16 + 2) * 0.15 + Math.cos(t * 25) * 0.1;

      if (flame1.current) flame1.current.scale.set(1 + flicker1, 1 + flicker1 * 1.5, 1 + flicker1);
      if (flame2.current) flame2.current.scale.set(1 + flicker2, 1 + flicker2 * 1.5, 1 + flicker2);
      if (flame3.current) flame3.current.scale.set(1 + flicker3, 1 + flicker3 * 1.5, 1 + flicker3);

      if (flameLight1.current) flameLight1.current.intensity = 1.2 + flicker1;
      if (flameLight2.current) flameLight2.current.intensity = 1.2 + flicker2;
      if (flameLight3.current) flameLight3.current.intensity = 1.2 + flicker3;
    }
  });

  return (
    <group
      ref={cakeGroup}
      scale={1.15}
      onClick={(e) => {
        e.stopPropagation();
        if (!isBlown) onBlowCandles();
      }}
      onPointerOver={() => {
        if (!isBlown) document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default';
      }}
    >
      {/* --- LUXURY GOLDEN CAKE STAND --- */}
      {/* Base Foot */}
      <mesh position={[0, -0.65, 0]} material={materials.stand} castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1.4, 0.15, 36]} />
      </mesh>
      {/* Pedestal Stem */}
      <mesh position={[0, -0.4, 0]} material={materials.stand} castShadow>
        <cylinderGeometry args={[0.3, 0.45, 0.45, 24]} />
      </mesh>
      {/* Plate */}
      <mesh position={[0, -0.15, 0]} material={materials.stand} receiveShadow>
        <cylinderGeometry args={[2.0, 2.0, 0.08, 48]} />
      </mesh>

      {/* --- TIER 1 (BOTTOM - DEEP VIOLET & GOLD BEADING) --- */}
      <mesh position={[0, 0.2, 0]} material={materials.tierBottom} castShadow receiveShadow>
        <cylinderGeometry args={[1.7, 1.7, 0.65, 48]} />
      </mesh>
      {/* Gold Rim */}
      <mesh position={[0, -0.1, 0]} material={materials.goldTrim}>
        <torusGeometry args={[1.72, 0.035, 16, 48]} />
      </mesh>

      {/* --- TIER 2 (MIDDLE - ROMANTIC ROSE) --- */}
      <mesh position={[0, 0.8, 0]} material={materials.tierMiddle} castShadow receiveShadow>
        <cylinderGeometry args={[1.25, 1.25, 0.55, 48]} />
      </mesh>
      {/* Gold Trim */}
      <mesh position={[0, 0.53, 0]} material={materials.goldTrim}>
        <torusGeometry args={[1.27, 0.03, 16, 48]} />
      </mesh>

      {/* --- TIER 3 (TOP - SOFT WHITE & PEARL) --- */}
      <mesh position={[0, 1.3, 0]} material={materials.tierTop} castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.45, 48]} />
      </mesh>
      {/* Gold Trim */}
      <mesh position={[0, 1.08, 0]} material={materials.goldTrim}>
        <torusGeometry args={[0.82, 0.025, 16, 48]} />
      </mesh>

      {/* --- 3 ROMANTIC BIRTHDAY CANDLES --- */}
      {[
        { x: -0.32, z: 0, ref: flame1, lightRef: flameLight1 },
        { x: 0, z: 0.28, ref: flame2, lightRef: flameLight2 },
        { x: 0.32, z: 0, ref: flame3, lightRef: flameLight3 },
      ].map((candle, idx) => (
        <group key={idx} position={[candle.x, 1.55, candle.z]}>
          {/* Candle wax stick */}
          <mesh material={materials.candle} castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.35, 16]} />
          </mesh>

          {/* Golden spiral ring on candle */}
          <mesh position={[0, 0.05, 0]} material={materials.goldTrim}>
            <torusGeometry args={[0.043, 0.008, 8, 16]} />
          </mesh>

          {/* Candle Flame (If not extinguished) */}
          {!isBlown && (
            <group position={[0, 0.24, 0]}>
              <mesh ref={candle.ref} material={materials.flame}>
                <coneGeometry args={[0.04, 0.12, 12]} />
              </mesh>
              <pointLight
                ref={candle.lightRef}
                color="#FFE8BD"
                intensity={1.2}
                distance={1.5}
                decay={2}
              />
            </group>
          )}

          {/* Smoke wisp when blown */}
          {isBlown && (
            <mesh position={[0, 0.26, 0]}>
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshBasicMaterial color="#C7A5F5" transparent opacity={0.4} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
};

