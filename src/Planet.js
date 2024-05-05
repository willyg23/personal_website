import React from 'react';
import { Sphere, useTexture } from '@react-three/drei';

function Planet({ position, textureUrl }) {
  const texture = useTexture(textureUrl);
  return (
    <Sphere position={position}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

export default Planet;
