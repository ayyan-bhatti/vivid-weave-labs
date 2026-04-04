import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function GlowSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[2.5, 0.3, 0]}>
        <MeshDistortMaterial color="#6366F1" metalness={0.8} roughness={0.3} distort={0.2} speed={1.2} transparent opacity={0.7} />
      </Sphere>
    </Float>
  );
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Torus ref={meshRef} args={[0.7, 0.2, 32, 64]} position={[-2.5, 1, -1]}>
        <meshStandardMaterial color="#4f46e5" metalness={0.85} roughness={0.25} transparent opacity={0.6} />
      </Torus>
    </Float>
  );
}

function FloatingIco() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.5}>
      <Icosahedron ref={meshRef} args={[0.5, 1]} position={[-1.2, -1.5, 0.5]}>
        <meshStandardMaterial color="#3B82F6" metalness={0.7} roughness={0.35} transparent opacity={0.5} />
      </Icosahedron>
    </Float>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 60;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#6366F1" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} color="#c4b5fd" />
          <pointLight position={[-3, 2, 3]} intensity={0.4} color="#6366F1" />
          <GlowSphere />
          <FloatingTorus />
          <FloatingIco />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
