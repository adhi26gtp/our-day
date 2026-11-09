import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface PetalsFieldProps {
  count?: number;
}

export const PetalsField: React.FC<PetalsFieldProps> = ({ count = 45 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate curved rose petal geometry
  const petalGeometry = useMemo(() => {
    const geom = new THREE.PlaneGeometry(0.18, 0.28, 4, 4);
    const pos = geom.attributes.position;
    // Curve the petal vertices into a natural organic bowl shape
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const zOffset = Math.sin((v + 0.14) * 8) * 0.04 - (u * u) * 0.4;
      pos.setZ(i, zOffset);
    }
    geom.computeVertexNormals();
    return geom;
  }, []);

  // Delicate translucent petal material
  const petalMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#F2A7C6'),
      roughness: 0.35,
      metalness: 0.05,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.88,
      emissive: new THREE.Color('#782245'),
      emissiveIntensity: 0.15,
    });
  }, []);

  // Initial random positions and velocities
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 12,
      y: (Math.random() - 0.5) * 10 + 2,
      z: (Math.random() - 0.5) * 8 - 1,
      speedY: 0.008 + Math.random() * 0.012,
      speedX: (Math.random() - 0.5) * 0.005,
      rotSpeedX: (Math.random() - 0.5) * 0.02,
      rotSpeedY: (Math.random() - 0.5) * 0.03,
      rotSpeedZ: (Math.random() - 0.5) * 0.02,
      rotX: Math.random() * Math.PI * 2,
      rotY: Math.random() * Math.PI * 2,
      rotZ: Math.random() * Math.PI * 2,
      scale: 0.7 + Math.random() * 0.6,
      flutterPhase: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((p, i) => {
      // Fluttering downward drift
      p.y -= p.speedY;
      p.x += Math.sin(time * 1.5 + p.flutterPhase) * 0.006 + p.speedX;
      p.z += Math.cos(time * 1.2 + p.flutterPhase) * 0.004;

      p.rotX += p.rotSpeedX;
      p.rotY += p.rotSpeedY;
      p.rotZ += p.rotSpeedZ;

      // Wrap around screen boundaries
      if (p.y < -5) {
        p.y = 6;
        p.x = (Math.random() - 0.5) * 12;
        p.z = (Math.random() - 0.5) * 8 - 1;
      }

      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(p.rotX, p.rotY, p.rotZ);
      dummy.scale.set(p.scale, p.scale, p.scale);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[petalGeometry, petalMaterial, count]}
      frustumCulled={false}
    />
  );
};

