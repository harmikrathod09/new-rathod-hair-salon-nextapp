"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  PerspectiveCamera,
  Environment,
  Sparkles,
  OrbitControls,
  MeshTransmissionMaterial
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// --- SALON RELATED TOOLS ---

function ScissorTool({ position, rotation, scale }: any) {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <group rotation={rotation} scale={scale}>
        <mesh position={[-0.4, 0, 0]}><torusGeometry args={[0.3, 0.05, 16, 32]} /><meshStandardMaterial color="#d4af37" metalness={1} /></mesh>
        <mesh position={[0.4, 0, 0]}><torusGeometry args={[0.3, 0.05, 16, 32]} /><meshStandardMaterial color="#d4af37" metalness={1} /></mesh>
        <mesh position={[-0.15, 0.8, 0]} rotation={[0, 0, 0.1]}><boxGeometry args={[0.1, 1.5, 0.02]} /><meshStandardMaterial color="#fff" metalness={1} /></mesh>
        <mesh position={[0.15, 0.8, 0]} rotation={[0, 0, -0.1]}><boxGeometry args={[0.1, 1.5, 0.02]} /><meshStandardMaterial color="#fff" metalness={1} /></mesh>
      </group>
    </Float>
  );
}

function HairDryerTool({ position, rotation, scale }: any) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5} position={position}>
      <group rotation={rotation} scale={scale}>
        <mesh rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.3, 0.4, 1, 32]} /><meshStandardMaterial color="#111" metalness={0.5} /></mesh>
        <mesh position={[0, -0.6, 0.3]}><boxGeometry args={[0.2, 0.8, 0.2]} /><meshStandardMaterial color="#111" /></mesh>
        <mesh position={[0, 0.6, 0]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.25, 0.25, 0.3, 32]} /><meshStandardMaterial color="#d4af37" metalness={1} /></mesh>
      </group>
    </Float>
  );
}

function SprayBottleTool({ position, rotation, scale }: any) {
  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1} position={position}>
      <group rotation={rotation} scale={scale}>
        <mesh><cylinderGeometry args={[0.3, 0.35, 1, 32]} /><meshStandardMaterial color="#8b0000" transparent opacity={0.7} roughness={0.1} /></mesh>
        <mesh position={[0, 0.6, 0]}><cylinderGeometry args={[0.1, 0.3, 0.3, 16]} /><meshStandardMaterial color="#111" /></mesh>
        <mesh position={[0.2, 0.7, 0]} rotation={[0, 0, 0.5]}><boxGeometry args={[0.1, 0.4, 0.1]} /><meshStandardMaterial color="#111" /></mesh>
      </group>
    </Float>
  );
}

function CombTool({ position, rotation, scale }: any) {
  return (
    <Float speed={2.2} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <group rotation={rotation} scale={scale}>
        <mesh><boxGeometry args={[1.2, 0.15, 0.02]} /><meshStandardMaterial color="#d4af37" metalness={1} /></mesh>
        {[...Array(12)].map((_, i) => (
          <mesh key={i} position={[-0.55 + i * 0.1, -0.25, 0]}>
            <boxGeometry args={[0.02, 0.4, 0.01]} />
            <meshStandardMaterial color="#d4af37" metalness={1} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function GelJarTool({ position, rotation, scale }: any) {
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1} position={position}>
      <group rotation={rotation} scale={scale}>
        <mesh><cylinderGeometry args={[0.4, 0.4, 0.4, 32]} /><meshStandardMaterial color="#111" metalness={0.5} /></mesh>
        <mesh position={[0, 0.25, 0]}><cylinderGeometry args={[0.42, 0.42, 0.1, 32]} /><meshStandardMaterial color="#d4af37" metalness={1} /></mesh>
        <mesh position={[0, 0.05, 0]}><cylinderGeometry args={[0.38, 0.38, 0.3, 32]} /><meshStandardMaterial color="#8b0000" transparent opacity={0.5} /></mesh>
      </group>
    </Float>
  );
}

function ShavingBrushTool({ position, rotation, scale }: any) {
  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={position}>
      <group rotation={rotation} scale={scale}>
        <mesh><cylinderGeometry args={[0.2, 0.25, 0.5, 16]} /><meshStandardMaterial color="#d4af37" metalness={1} /></mesh>
        <mesh position={[0, 0.5, 0]}><coneGeometry args={[0.3, 0.6, 16]} /><meshStandardMaterial color="#555" roughness={0.8} /></mesh>
      </group>
    </Float>
  );
}

function BarberChair({ position, rotation, scale }: any) {
  return (
    <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.5} position={position}>
      <group rotation={rotation} scale={scale}>
        <mesh position={[0, -1, 0]}><cylinderGeometry args={[0.8, 0.8, 0.1, 32]} /><meshStandardMaterial color="#d4af37" metalness={1} /></mesh>
        <mesh position={[0, 0, 0]}><boxGeometry args={[1, 0.2, 1]} /><meshStandardMaterial color="#8b0000" /></mesh>
        <mesh position={[0, 0.6, -0.4]} rotation={[-0.1, 0, 0]}><boxGeometry args={[0.9, 1, 0.15]} /><meshStandardMaterial color="#8b0000" /></mesh>
        <mesh position={[-0.55, 0.3, 0]}><boxGeometry args={[0.1, 0.1, 0.8]} /><meshStandardMaterial color="#d4af37" metalness={1} /></mesh>
        <mesh position={[0.55, 0.3, 0]}><boxGeometry args={[0.1, 0.1, 0.8]} /><meshStandardMaterial color="#d4af37" metalness={1} /></mesh>
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
        <spotLight position={[-10, -10, 10]} angle={0.2} penumbra={1} intensity={1.5} color="#8b0000" />
        <pointLight position={[0, 0, 2]} intensity={1} color="#ff0000" />
        <Environment preset="night" />

        <BarberChair position={[0, -0.5, -8]} rotation={[0.2, 0.5, 0]} scale={3.2} />

        {/* Foreground Barber Chair on the Right */}
        {/* <BarberChair position={[6, -2, 2]} rotation={[0.1, -0.8, 0]} scale={4} /> */}

        {/* Many More Tools */}
        <ScissorTool position={[-4, 4, 0]} rotation={[0.5, 0.5, 0]} scale={0.8} />
        <ScissorTool position={[3, -5, -2]} rotation={[1.2, 0.5, 0.2]} scale={0.6} />

        <HairDryerTool position={[5, 3, -1]} rotation={[-0.3, -0.8, 0.5]} scale={1.1} />
        <HairDryerTool position={[-5, -4, -3]} rotation={[0.5, 0.2, 0]} scale={0.9} />

        <SprayBottleTool position={[-6, 1, 2]} rotation={[0.2, 0.5, -0.5]} scale={1.3} />
        <SprayBottleTool position={[6, -2, 1]} rotation={[-0.5, -0.2, 0.8]} scale={1.2} />

        <CombTool position={[-2, 5, -2]} rotation={[0.5, 0.3, 0.8]} scale={1.5} />
        <CombTool position={[4, -5, 1]} rotation={[-1.2, 0, 0.5]} scale={1.2} />

        <GelJarTool position={[5, 1, -2]} rotation={[0.2, 0.8, 0]} scale={1.2} />
        <GelJarTool position={[-4, -2, -1]} rotation={[-0.5, 0.2, 0.5]} scale={1} />

        <ShavingBrushTool position={[-3, 3, 3]} rotation={[0.8, 0.5, -0.2]} scale={1.4} />
        <ShavingBrushTool position={[2, 4, -4]} rotation={[0.2, -0.8, 0.5]} scale={1.2} />

        <Sparkles count={400} scale={20} size={3} speed={0.8} opacity={0.3} color="#d4af37" />
        <fog attach="fog" args={["#000", 10, 25]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)]" />
    </div>
  );
}
