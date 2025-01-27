/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 Maharashtra.glb 
*/

import React, { useRef } from "react";
import { PositionalAudio, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { IndiaGate } from "./IndiaGate";
// import { IndiaGateTry2 } from "./IndiaGateTry2";
import { EC } from "./EC";
import { MOUSE } from "three";

const Maharashtra = (props) => {
  const { nodes, materials } = useGLTF("/Maharashtra.glb");
  console.log("dummy");
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
      camera={{ position: [-20, 0, 0] }}
    >
      {/* <OrbitControls enablePan={true} enableRotate={true} /> */}
      <OrbitControls
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        panSpeed={0.5}
        autoRotateSpeed={1}
        maxDistance={18}
        mouseButtons={{
          LEFT: MOUSE.LEFT,
          UP: MOUSE.UP,
          RIGHT: MOUSE.RIGHT,
          BOTTOM: MOUSE.BOTTOM,
        }}
      />
      <PositionalAudio autoplay loop url="/Maharashtra.mp3" distance={5.4} />

      <ambientLight intensity={0.5} />
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        />
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials["Material.001"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        />

        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials["Material.002"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        />
        <EC />
        <mesh
          geometry={nodes.Cube004.geometry}
          material={materials["Material.003"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        />
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials["Material.004"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        />
      </group>
    </Canvas>
  );
};

useGLTF.preload("/Maharashtra.glb");
export default Maharashtra;
