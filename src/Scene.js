import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Planet'; // Import the Planet component

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <OrbitControls />
      <Planet position={[1, 1, 1]} textureUrl="/2k_neptune.jpg" />
      <Planet position={[-2, 1, 5]} textureUrl="/2k_uranus.jpg" />
    </Canvas>
  );
}

export default Scene;
