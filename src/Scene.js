import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Planet';
import { useSpring, a } from '@react-spring/three';

function Scene() {
  const [{ position }, api] = useSpring(() => ({ position: [0, 0, 10] }), []); // Spring for camera position

  const focusOnPlanet = (pos) => {
    api.start({
      position: [pos[0], pos[1], pos[2] + 5] // Move camera closer to the planet by adjusting position
    });
  };

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <OrbitControls />
      <a.group position={position}> {/* Only the camera group is animated */}
        <Planet position={[1, 1, 1]} textureUrl="/2k_neptune.jpg" onClick={() => focusOnPlanet([1, 1, 1])} />
        <Planet position={[-2, 1, 5]} textureUrl="/2k_uranus.jpg" onClick={() => focusOnPlanet([-2, 1, 5])} />
      </a.group>
    </Canvas>
  );
}

export default Scene;
