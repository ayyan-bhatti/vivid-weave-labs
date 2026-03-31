import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function GoldSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[2.5, 0, 0]}>
        <MeshDistortMaterial
          color="#c8943e"
          metalness={0.95}
          roughness={0.15}
          distort={0.25}
          speed={1.5}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Torus ref={meshRef} args={[0.8, 0.25, 32, 64]} position={[-2.8, 1.2, -1]}>
        <meshStandardMaterial
          color="#a07830"
          metalness={0.9}
          roughness={0.2}
          emissive="#5a4020"
          emissiveIntensity={0.15}
        />
      </Torus>
    </Float>
  );
}

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <Box ref={meshRef} args={[0.6, 0.6, 0.6]} position={[-1.5, -1.5, 0.5]}>
        <meshStandardMaterial
          color="#d4a84b"
          metalness={0.85}
          roughness={0.25}
          emissive="#3d2e15"
          emissiveIntensity={0.1}
        />
      </Box>
    </Float>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 80;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#c8943e" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffd699" />
          <pointLight position={[-3, 2, 3]} intensity={0.5} color="#c8943e" />
          <GoldSphere />
          <FloatingTorus />
          <FloatingCube />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
