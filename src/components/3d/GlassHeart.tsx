import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface GlassHeartProps {
  scale?: number;
  interactive?: boolean;
}

export const GlassHeart: React.FC<GlassHeartProps> = ({ scale = 1, interactive = true }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const innerGlowRef = useRef<THREE.PointLight>(null);

  // Generate Heart Shape
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Start at center bottom
    const x = 0;
    const y = 0;

    // Heart shape bezier contour
    shape.moveTo(x, y + 0.5);
    shape.bezierCurveTo(x, y + 0.8, x - 0.7, y + 1.2, x - 1.2, y + 0.8);
    shape.bezierCurveTo(x - 1.8, y + 0.3, x - 1.5, y - 0.6, x, y - 1.5);
    shape.bezierCurveTo(x + 1.5, y - 0.6, x + 1.8, y + 0.3, x + 1.2, y + 0.8);
    shape.bezierCurveTo(x + 0.7, y + 1.2, x, y + 0.8, x, y + 0.5);

    const extrudeSettings = {
      depth: 0.35,
      bevelEnabled: true,
      bevelSegments: 16,
      steps: 3,
      bevelSize: 0.22,
      bevelThickness: 0.22,
    };

    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.center();
    geom.computeVertexNormals();
    return geom;
  }, []);

  // Material with translucent crystal / glass refraction look
  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#F2A7C6'),
      emissive: new THREE.Color('#3A1835'),
      emissiveIntensity: 0.35,
      roughness: 0.08,
      metalness: 0.1,
      transmission: 0.85, // Glass translucency
      ior: 1.52, // Index of refraction of glass
      thickness: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95,
      specularColor: new THREE.Color('#FFF7FC'),
      transparent: true,
      opacity: 0.95,
    });
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (!groupRef.current) return;

    // Gentle heartbeat pulse (systole & diastole)
    const heartBeat = Math.sin(t * 2.8);
    const beatPulse = 1 + (heartBeat > 0 ? Math.pow(heartBeat, 4) * 0.05 : 0);
    
    // Smooth floating movement
    groupRef.current.position.y = Math.sin(t * 1.4) * 0.12;

    // Subtle breathing rotation
    const baseRotationY = Math.sin(t * 0.7) * 0.35;
    
    // Interactive mouse parallax tilt
    if (interactive) {
      const targetRotX = -state.pointer.y * 0.25;
      const targetRotY = baseRotationY + state.pointer.x * 0.4;
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 4, delta);
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 4, delta);
    } else {
      groupRef.current.rotation.y = baseRotationY;
    }

    // Apply scale with pulse
    const currentScale = scale * beatPulse;
    groupRef.current.scale.set(currentScale, currentScale, currentScale);

    // Dynamic inner light pulse
    if (innerGlowRef.current) {
      innerGlowRef.current.intensity = 1.6 + Math.sin(t * 2.8) * 0.8;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3D Glass Heart Mesh */}
      <mesh ref={meshRef} geometry={geometry} material={glassMaterial} castShadow receiveShadow />

      {/* Internal warm glowing golden heart light */}
      <pointLight
        ref={innerGlowRef}
        color="#E8C58A"
        intensity={2}
        distance={4}
        decay={2}
        position={[0, 0, 0.1]}
      />

      {/* Secondary romantic rose core fill */}
      <pointLight
        color="#F2A7C6"
        intensity={1.2}
        distance={3}
        position={[0, 0.2, -0.2]}
      />

      {/* Subtle interior glowing spark */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#FFE8BD" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

