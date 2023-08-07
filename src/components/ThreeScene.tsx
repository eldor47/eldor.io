import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Environment, Lightformer, Stars, useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { Group } from 'three';
import { easing } from 'maath'
import Model from './EldorModel';

const ThreeScene = () => {
  const cubeGroupRef = useRef<Group | null>(null);
  const [perfSucks, degrade] = React.useState(false);

  useEffect(() => {
    console.log(cubeGroupRef)
    const handleScroll = () => {

      if (cubeGroupRef.current) {
        const scrollY = window.scrollY;
        //const rotationY = (scrollY / window.innerHeight) * Math.PI * 3;
        const rotationX = (scrollY / window.innerHeight) * Math.PI * 2.1;

        //cubeGroupRef.current.rotation.y = rotationY;
        cubeGroupRef.current.rotation.x = rotationX;
      }
    };

    //add eventlistener to window
    window.addEventListener("scroll", handleScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="fixed bottom-0 right-0 w-screen h-screen">
      <Canvas shadows style={{backgroundColor: "#2A1E36"}}>

        <Environment frames={perfSucks ? 1 : Infinity} preset="forest" resolution={512} background={false} blur={0.7}>
          <group rotation={[Math.PI / 2, 1, 0]}>
            {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
              <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
            ))}
            <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
            <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
            <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
          </group>

        </Environment>

        <group ref={cubeGroupRef}>
          <Stars></Stars>
          <Model scale={[100, 100, 100]} rotation={[89.3,0,0]}></Model>
        </group>


        {/* <OrbitControls enableZoom={false}/> */}
      </Canvas>
    </div>
  );
};



export default ThreeScene;
