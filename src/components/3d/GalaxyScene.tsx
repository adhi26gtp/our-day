import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { CosmicCore } from './CosmicCore';
import { GalaxyStars } from './GalaxyStars';

export const GalaxyScene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 1.2, 5.2], fov: 46 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        
        {/* Soft Golden Celestial Spotlight */}
        <directionalLight
          position={[4, 5, 4]}
          intensity={1.5}
          color="#FFE8BD"
        />

        {/* Romantic Rose Accent Light */}
        <directionalLight
          position={[-4, 3, -2]}
          intensity={1.2}
          color="#F2A7C6"
        />

        {/* Deep Violet Base Fill */}
        <directionalLight
          position={[0, -4, 2]}
          intensity={0.6}
          color="#9B6CD8"
        />

        <Suspense fallback={null}>
          <Float
            speed={1.5}
            rotationIntensity={0.2}
            floatIntensity={0.4}
            floatingRange={[-0.1, 0.1]}
          >
            <CosmicCore scale={1.05} />
          </Float>

          {/* 3D Spiral Galaxy Stars */}
          <GalaxyStars count={1000} />
        </Suspense>
      </Canvas>
    </div>
  );
};

