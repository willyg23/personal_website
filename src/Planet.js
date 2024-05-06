import React from 'react';
import { Sphere, useTexture } from '@react-three/drei';

function Planet({ position, textureUrl, onClick }) {
  const texture = useTexture(textureUrl);

  return (
    <Sphere position={position} onClick={onClick}> // Added onClick here
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

export default Planet;
