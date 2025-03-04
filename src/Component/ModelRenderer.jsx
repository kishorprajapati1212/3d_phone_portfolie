import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useFBX, Environment } from '@react-three/drei';
import gsap from 'gsap';

const ModelRenderer = ({ targetPosition, targetRotation }) => {
    // console.log(targetPosition)
  const modelRef = useRef();
  const fbx = useFBX('/test2.fbx'); // Adjust the path as necessary
  const positionSpeed = 1.5;
  const rotationSpeed = 1.5;
  const positionAnimation = useRef(null);
  const rotationAnimation = useRef(null);

  // Smoothly animate position and rotation using GSAP
  useEffect(() => {
    if (modelRef.current) {
      // Create position animation
      positionAnimation.current = gsap.to(modelRef.current.position, {
        x: targetPosition[0],
        y: targetPosition[1],
        z: targetPosition[2],
        duration: positionSpeed, // Animation duration
        ease: 'power3.out', // Easing function
      });

      // Create rotation animation
      rotationAnimation.current = gsap.to(modelRef.current.rotation, {
        x: targetRotation.x,
        y: targetRotation.y,
        z: targetRotation.z,
        duration: rotationSpeed, // Animation duration
        ease: 'power3.out', // Easing function
      });
    }

    // Cleanup function to kill animations
    return () => {
      if (positionAnimation.current) {
        positionAnimation.current.kill();
        positionAnimation.current = null;
      }
      if (rotationAnimation.current) {
        rotationAnimation.current.kill();
        rotationAnimation.current = null;
      }
    };
  }, [targetPosition, targetRotation]);
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 20, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* <directionalLight
        position={[5, 20, 5]}
        intensity={3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      /> */}
       <directionalLight
        position={[-5, -20, 7]}
        intensity={4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={0.8} angle={0.3} penumbra={1} castShadow />
      <spotLight position={[10, 10, 10]} intensity={0.8} angle={-30} penumbra={100} castShadow />

      {/* Model */}
      <primitive ref={modelRef} object={fbx} scale={0.3} />

      {/* Environment map for reflections */}
      <Environment preset="sunset" />
    </>
  );
};

export default ModelRenderer;
