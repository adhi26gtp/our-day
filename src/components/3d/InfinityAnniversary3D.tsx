import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

class LemniscateCurve extends THREE.Curve<THREE.Vector3> {
  scale: number;
  constructor(scale = 2.4) {
    super();
    this.scale = scale;
  }
  getPoint(t: number, optionalTarget = new THREE.Vector3()) {
    const angle = t * Math.PI * 2;
    const denom = 1 + Math.sin(angle) * Math.sin(angle);
    const x = (this.scale * Math.cos(angle)) / denom;
    const y = (this.scale * Math.sin(angle) * Math.cos(angle)) / denom;
    const z = Math.sin(angle * 2) * 0.2;
    return optionalTarget.set(x, y, z);
  }
}

interface InfinityAnniversary3DProps {
  scale?: number;
}

export const InfinityAnniversary3D: React.FC<InfinityAnniversary3DProps> = ({ scale = 1 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const heartRef = useRef<THREE.Group>(null);
  const infinityMesh = useRef<THREE.Mesh>(null);
  const centerLight = useRef<THREE.PointLight>(null);

  // Generate smooth 3D Infinity Tube Geometry
  const tubeGeometry = useMemo(() => {
    const curve = new LemniscateCurve(2.2);
    return new THREE.TubeGeometry(curve, 128, 0.08, 16, true);
  }, []);

  // Generate Heart Shape Geometry for Center
  const heartGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.3);
    shape.bezierCurveTo(0, 0.5, -0.4, 0.7, -0.7, 0.5);
    shape.bezierCurveTo(-1.0, 0.2, -0.9, -0.3, 0, -0.9);
    shape.bezierCurveTo(0.9, -0.3, 1.0, 0.2, 0.7, 0.5);
    shape.bezierCurveTo(0.4, 0.7, 0, 0.5, 0, 0.3);

    const geom = new THREE.ExtrudeGeometry(shape, {
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 12,
      steps: 2,
      bevelSize: 0.12,
      bevelThickness: 0.12,
    });
    geom.center();
    return geom;
  }, []);

  // Materials
  const materials = useMemo(() => {
    return {
      infinity: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#E8C58A'),
        emissive: new THREE.Color('#8A6020'),
        emissiveIntensity: 0.5,
        roughness: 0.15,
        metalness: 0.9,
      }),
      heart: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#F2A7C6'),
        emissive: new THREE.Color('#681535'),
        emissiveIntensity: 0.4,
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.85,
        ior: 1.5,
        clearcoat: 1.0,
      }),
    };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (!groupRef.current) return;

    // Slow cinematic turntable sway
    groupRef.current.rotation.y = Math.sin(t * 0.6) * 0.35;
    groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.15;

    // Heartbeat pulse at the center
    if (heartRef.current) {
      const pulse = 1 + Math.sin(t * 3) * 0.04 + (Math.sin(t * 3) > 0.8 ? 0.06 : 0);
      heartRef.current.scale.set(pulse * 0.65, pulse * 0.65, pulse * 0.65);
      heartRef.current.rotation.y = t * 0.5;
    }

    if (centerLight.current) {
      centerLight.current.intensity = 2.2 + Math.sin(t * 3) * 0.8;
    }

    // Mouse tilt
    const targetX = -state.pointer.y * 0.2;
    const targetY = state.pointer.x * 0.25;
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetX, 3, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetY, 3, delta);
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* 3D Infinity Loop */}
      <mesh ref={infinityMesh} geometry={tubeGeometry} material={materials.infinity} castShadow />

      {/* Radiant Glowing Crystal Heart in the Center */}
      <group ref={heartRef} position={[0, 0, 0]}>
        <mesh geometry={heartGeometry} material={materials.heart} />
      </group>

      {/* Internal Center Light */}
      <pointLight ref={centerLight} color="#FFE8BD" intensity={2.5} distance={5} />
      <pointLight color="#F2A7C6" intensity={1.5} distance={3} position={[0, 0, 0.2]} />
    </group>
  );
};

