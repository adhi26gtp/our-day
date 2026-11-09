import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { GlassHeart } from './GlassHeart';
import { PetalsField } from './PetalsField';
import { SparkleField } from './SparkleField';

interface InvitationSceneProps {
  interactive?: boolean;
}

export const InvitationScene: React.FC<InvitationSceneProps> = ({ interactive = true }) => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        {/* Ambient & Studio Rim Lighting */}
        <ambientLight intensity={0.7} />
        
        {/* Soft Key Light from top-right */}
        <directionalLight
          position={[4, 5, 4]}
          intensity={1.8}
          color="#FFE8BD"
        />

        {/* Romantic Rose Rim Light from back-left */}
        <directionalLight
          position={[-4, 3, -3]}
          intensity={2.2}
          color="#F2A7C6"
        />

        {/* Deep Violet Base Fill */}
        <directionalLight
          position={[0, -4, 2]}
          intensity={0.6}
          color="#C7A5F5"
        />

        <Suspense fallback={null}>
          <Float
            speed={2}
            rotationIntensity={0.3}
            floatIntensity={0.6}
            floatingRange={[-0.1, 0.1]}
          >
            <GlassHeart scale={1.15} interactive={interactive} />
          </Float>

          {/* Drifting Rose Petals */}
          <PetalsField count={40} />

          {/* Floating Stardust Sparkles */}
          <SparkleField count={180} />
        </Suspense>
      </Canvas>
    </div>
  );
};

