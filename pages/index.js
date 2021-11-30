import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import TweetScene from '../components/organisms/TweetScene'

export default function BirdsPage() {
  return (
    <div style={{height: "100vh", width: "100%"}}>
        <Canvas
        colorManagement
        shadows
        camera={{ position: [5, 5, 5], fov: 90 }}>
          <OrbitControls />
          <fog attach="fog" args={["white", 0, 40]} />
          <ambientLight intensity={0.1} />
          <directionalLight
            intensity={0.5}
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
          />
          <TweetScene />
        </Canvas>
    </div>
    
  );
}

