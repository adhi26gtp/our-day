import React, { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Heart, Sparkles } from 'lucide-react';

interface MiniatureVanProps {
  onWindowClick: () => void;
  isOpen: boolean;
}

export const MiniatureVan: React.FC<MiniatureVanProps> = ({ onWindowClick, isOpen }) => {
  const vanGroup = useRef<THREE.Group>(null);
  const wheelsRef = useRef<THREE.Group[]>([]);
  const [hovered, setHovered] = useState(false);
  const interiorLight = useRef<THREE.PointLight>(null);

  // Materials
  const materials = useMemo(() => {
    return {
      bodyMain: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#FFF7FC'),
        roughness: 0.2,
        metalness: 0.1,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
      }),
      bodyTrim: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#F2A7C6'),
        roughness: 0.3,
        metalness: 0.2,
      }),
      bumperGold: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#E8C58A'),
        roughness: 0.25,
        metalness: 0.8,
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#C7A5F5'),
        transmission: 0.75,
        opacity: 0.8,
        transparent: true,
        roughness: 0.1,
        ior: 1.5,
        reflectivity: 0.8,
      }),
      interactiveWindow: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(hovered ? '#FFE8BD' : '#F2A7C6'),
        transmission: 0.65,
        opacity: 0.9,
        transparent: true,
        roughness: 0.05,
        ior: 1.5,
        emissive: new THREE.Color(hovered ? '#E8C58A' : '#782245'),
        emissiveIntensity: hovered ? 0.6 : 0.2,
      }),
      tire: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#1F142B'),
        roughness: 0.7,
      }),
      headlight: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#FFE8BD'),
        emissive: new THREE.Color('#FFE8BD'),
        emissiveIntensity: 1.2,
      }),
      taillight: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#FF4D6D'),
        emissive: new THREE.Color('#D12B50'),
        emissiveIntensity: 0.9,
      }),
      interiorSeat: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#3A1D4E'),
        roughness: 0.6,
      }),
    };
  }, [hovered]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (!vanGroup.current) return;

    // Gentle engine idling vibration & floating sway
    vanGroup.current.position.y = Math.sin(t * 2) * 0.05 + 0.1;
    vanGroup.current.rotation.z = Math.sin(t * 1.5) * 0.015;

    // Slowly turn the van on a gentle turntable angle
    vanGroup.current.rotation.y = THREE.MathUtils.damp(
      vanGroup.current.rotation.y,
      -0.45 + (hovered ? 0.1 : 0) + Math.sin(t * 0.5) * 0.08,
      3,
      delta
    );

    // Subtle wheel rolling animation
    wheelsRef.current.forEach((wheel) => {
      if (wheel) wheel.rotation.z += 0.02;
    });

    // Pulsing warm interior light
    if (interiorLight.current) {
      interiorLight.current.intensity = 1.4 + Math.sin(t * 3) * 0.4 + (hovered ? 1.0 : 0);
    }
  });

  return (
    <group ref={vanGroup} position={[0, -0.2, 0]} scale={1.25}>
      {/* --- CHASSIS & LOWER BODY --- */}
      {/* Lower Rose Band */}
      <mesh position={[0, 0.25, 0]} material={materials.bodyTrim} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.45, 1.25]} />
      </mesh>

      {/* Main Upper White Cabin */}
      <mesh position={[0, 0.75, 0]} material={materials.bodyMain} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.65, 1.2]} />
      </mesh>

      {/* Van Roof Cap */}
      <mesh position={[-0.05, 1.1, 0]} material={materials.bodyMain} castShadow>
        <boxGeometry args={[2.3, 0.1, 1.15]} />
      </mesh>

      {/* Front Windshield Slanted */}
      <mesh position={[1.15, 0.78, 0]} rotation={[0, 0, -0.25]} material={materials.glass}>
        <boxGeometry args={[0.08, 0.55, 1.1]} />
      </mesh>

      {/* Rear Window */}
      <mesh position={[-1.21, 0.78, 0]} material={materials.glass}>
        <boxGeometry args={[0.04, 0.45, 1.0]} />
      </mesh>

      {/* Left (Driver) Windows */}
      <mesh position={[-0.2, 0.8, -0.61]} material={materials.glass}>
        <boxGeometry args={[1.6, 0.45, 0.04]} />
      </mesh>

      {/* --- RIGHT (PASSENGER) SIDE WINDOWS --- */}
      {/* Non-interactive Rear Passenger Window */}
      <mesh position={[-0.65, 0.8, 0.61]} material={materials.glass}>
        <boxGeometry args={[0.7, 0.45, 0.04]} />
      </mesh>

      {/* ✨ SPECIAL INTERACTIVE PASSENGER WINDOW ✨ */}
      {/* Where we sat together holding hands */}
      <group position={[0.35, 0.8, 0.61]}>
        <mesh
          material={materials.interactiveWindow}
          onClick={(e) => {
            e.stopPropagation();
            onWindowClick();
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'default';
          }}
        >
          <boxGeometry args={[0.9, 0.48, 0.08]} />
        </mesh>

        {/* Floating Interactive Callout Tooltip */}
        {!isOpen && (
          <Html position={[0, 0.7, 0.1]} center distanceFactor={6} pointerEvents="none">
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border transition-all duration-300 shadow-rose-glow select-none whitespace-nowrap ${
                hovered
                  ? 'bg-[#E8C58A] border-[#FFF7FC] text-[#10091C] scale-110'
                  : 'bg-[#241331]/90 border-[#F2A7C6]/60 text-[#FFF7FC]'
              }`}
            >
              <Heart size={12} className={hovered ? 'fill-[#10091C] text-[#10091C]' : 'fill-[#F2A7C6] text-[#F2A7C6] animate-pulse'} />
              <span className="text-[11px] font-medium tracking-wide">
                {hovered ? 'Click window to look inside ❤️' : 'Our Window • Click Me'}
              </span>
              <Sparkles size={11} className="text-[#E8C58A]" />
            </div>
          </Html>
        )}
      </group>

      {/* --- INTERIOR --- */}
      {/* Passenger Bench / Two Seats (Where we sat together) */}
      <mesh position={[0.2, 0.4, 0.25]} material={materials.interiorSeat}>
        <boxGeometry args={[0.7, 0.35, 0.45]} />
      </mesh>
      <mesh position={[0.2, 0.65, 0.05]} material={materials.interiorSeat}>
        <boxGeometry args={[0.7, 0.4, 0.1]} />
      </mesh>

      {/* Miniature Glowing Heart between the two seats (representing holding hands) */}
      <mesh position={[0.2, 0.6, 0.25]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color="#F2A7C6" />
      </mesh>

      {/* Warm golden light inside van */}
      <pointLight
        ref={interiorLight}
        color="#FFE8BD"
        intensity={2.2}
        distance={3.5}
        decay={2}
        position={[0.2, 0.7, 0.2]}
      />

      {/* --- WHEELS (4 Stylized Wheels) --- */}
      {[
        { x: 0.75, z: 0.62 },
        { x: -0.75, z: 0.62 },
        { x: 0.75, z: -0.62 },
        { x: -0.75, z: -0.62 },
      ].map((pos, idx) => (
        <group
          key={idx}
          position={[pos.x, 0.12, pos.z]}
          ref={(el) => {
            if (el) wheelsRef.current[idx] = el;
          }}
        >
          {/* Tire */}
          <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.tire} castShadow>
            <cylinderGeometry args={[0.28, 0.28, 0.16, 24]} />
          </mesh>
          {/* Golden Hubcap */}
          <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.bumperGold}>
            <cylinderGeometry args={[0.14, 0.14, 0.18, 16]} />
          </mesh>
        </group>
      ))}

      {/* --- DETAILS: BUMPERS, LIGHTS, MIRRORS --- */}
      {/* Front Bumper (Champagne Gold) */}
      <mesh position={[1.25, 0.16, 0]} material={materials.bumperGold}>
        <boxGeometry args={[0.12, 0.14, 1.2]} />
      </mesh>

      {/* Rear Bumper */}
      <mesh position={[-1.25, 0.16, 0]} material={materials.bumperGold}>
        <boxGeometry args={[0.12, 0.14, 1.2]} />
      </mesh>

      {/* Headlights */}
      <mesh position={[1.22, 0.38, 0.42]} rotation={[0, Math.PI / 2, 0]} material={materials.headlight}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 16]} />
      </mesh>
      <mesh position={[1.22, 0.38, -0.42]} rotation={[0, Math.PI / 2, 0]} material={materials.headlight}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 16]} />
      </mesh>
      {/* Headlight Beams */}
      <spotLight
        color="#FFF1D0"
        intensity={3}
        distance={6}
        angle={0.4}
        penumbra={0.6}
        position={[1.3, 0.38, 0]}
        target-position={[4, 0, 0]}
      />

      {/* Taillights */}
      <mesh position={[-1.22, 0.38, 0.42]} rotation={[0, -Math.PI / 2, 0]} material={materials.taillight}>
        <cylinderGeometry args={[0.07, 0.07, 0.05, 16]} />
      </mesh>
      <mesh position={[-1.22, 0.38, -0.42]} rotation={[0, -Math.PI / 2, 0]} material={materials.taillight}>
        <cylinderGeometry args={[0.07, 0.07, 0.05, 16]} />
      </mesh>
    </group>
  );
};

