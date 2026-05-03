import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedOrb() {
  const wireRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (wireRef.current) {
      wireRef.current.rotation.x -= delta * 0.12;
      wireRef.current.rotation.y += delta * 0.18;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.07;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.05;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.6}>
      <group>
        {/* Outer rotating wireframe icosahedron */}
        <mesh ref={wireRef} scale={1.38}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.32} />
        </mesh>

        {/* Main distorted morphing sphere */}
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#6366f1"
            distort={0.38}
            speed={2.2}
            roughness={0.08}
            metalness={0.9}
          />
        </Sphere>

        {/* Inner glowing core */}
        <Sphere args={[0.52, 32, 32]}>
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.4} />
        </Sphere>

        {/* Primary orbital ring */}
        <mesh ref={ring1Ref} rotation={[Math.PI * 0.35, 0.2, 0]}>
          <torusGeometry args={[1.65, 0.016, 16, 120]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.55} />
        </mesh>

        {/* Secondary orbital ring */}
        <mesh ref={ring2Ref} rotation={[Math.PI * 0.6, 0.5, Math.PI * 0.3]}>
          <torusGeometry args={[1.95, 0.010, 16, 120]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.3} />
        </mesh>

        {/* Accent node dots on primary ring */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          const x = Math.cos(angle) * 1.65;
          const y = Math.sin(angle) * 1.65 * 0.5;
          return (
            <mesh key={i} position={[x, y, 0]} rotation={[Math.PI * 0.35, 0.2, 0]}>
              <sphereGeometry args={[0.045, 8, 8]} />
              <meshBasicMaterial color="#818cf8" />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 42 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.12} />
      <pointLight position={[4, 4, 4]} color="#6366f1" intensity={5} />
      <pointLight position={[-4, -3, -2]} color="#06b6d4" intensity={3} />
      <pointLight position={[0, 4, -4]} color="#8b5cf6" intensity={2} />
      <pointLight position={[2, -4, 2]} color="#22d3ee" intensity={1.5} />
      <AnimatedOrb />
    </Canvas>
  );
}
