"use client";

import React from 'react'
import {Suspense,useEffect,useState} from 'react';
import { Canvas } from "@react-three/fiber";
import {OrbitControls, Preload,useGLTF} from '@react-three/drei';

import CanvasLoader from '../loader';

const Model = () => {

    const tron=useGLTF('./helm/scene.gltf')
    
    return (
      <mesh>
          <hemisphereLight intensity={1}
           groundColor="black"/>
           <pointLight intensity={20}
           position={[3,3,3]}/>
           <pointLight intensity={40}
           position={[-3,3,3]}/>
           <primitive
              object={tron.scene}
              scale={0.15}
              position={[0,0,0]}
              rotation={[0,7,-6]}
           />
      </mesh>
    )
}

const Helm=()=>{
    return(
        <Canvas
            frameloop="demand"
            shadows
            camera={{position:[20,3,5], fov:10}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                autoRotate
                autoRotateSpeed={5} 
                 enableZoom={false}
                 maxPolarAngle={Math.PI/2}
                 minPolarAngle={Math.PI/2}
                />
                <Model/>
            </Suspense>

            <Preload all/>
        </Canvas>
    )
}

export default Helm;