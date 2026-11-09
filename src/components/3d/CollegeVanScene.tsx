import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { SparkleField } from './SparkleField';
import { PetalsField } from './PetalsField';
import { MiniatureVan } from './MiniatureVan';

interface CollegeVanSceneProps {
  onWindowClick: () => void;
  isOpen: boolean;
}

export const CollegeVanScene: React.FC<CollegeVanSceneProps> = ({ onWindowClick, isOpen }) => {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] rounded-3xl overflow-hidden glass-panel border border-[#F2A7C6]/20 shadow-rose-glow">
      <Canvas
        camera={{ position: [2.8, 1.8, 3.8], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Cinematic Studio Lighting for Romantic Atmosphere */}
        <ambientLight intensity={0.8} />
        
        {/* Soft Golden Sunset Light */}
        <directionalLight
          position={[5, 6, 4]}
          intensity={2.2}
          color="#FFE8BD"
          castShadow
        />

        {/* Romantic Rose Rim Light */}
        <directionalLight
          position={[-5, 4, -4]}
          intensity={1.8}
          color="#F2A7C6"
        />

        {/* Deep Violet Base Fill */}
        <directionalLight
          position={[0, -4, 2]}
          intensity={0.5}
          color="#9B6CD8"
        />

        <Suspense fallback={null}>
          {/* Miniature 3D Van */}
          <MiniatureVan onWindowClick={onWindowClick} isOpen={isOpen} />

          {/* Floating Road Pedestal */}
          <group position={[0, -0.65, 0]}>
            {/* Dark glass road surface */}
            <mesh receiveShadow>
              <cylinderGeometry args={[3.2, 3.4, 0.2, 48]} />
              <meshStandardMaterial
                color="#160B24"
                roughness={0.4}
                metalness={0.6}
              />
            </mesh>
            {/* Golden luminous ring edge */}
            <mesh position={[0, 0.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[3.1, 3.18, 48]} />
              <meshBasicMaterial color="#E8C58A" transparent opacity={0.6} />
            </mesh>
          </group>

          {/* Warm floating particles and rose petals */}
          <SparkleField count={90} />
          <PetalsField count={20} />
        </Suspense>
      </Canvas>
    </div>
  );
};

