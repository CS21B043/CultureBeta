/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 AP.glb 
*/
// import { Charminar } from "./Charminar";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PositionalAudio } from "@react-three/drei";
import { PositionalAudioProps } from "@react-three/fiber";
import { Church } from "./StMarksChurchBangalore";
import { Kite } from "./Kite";
// import { Pongal } from "./PongalSetup";
// import { Fireworks } from "./Fireworks";
import { LordBuddha } from "./LordBuddha";
import { MOUSE } from "three";
const AP = (props) => {
  const { nodes, materials } = useGLTF("/AP.glb");
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
      <ambientLight intensity={0.5} />

      <Kite />

      <LordBuddha />

      <group {...props} dispose={null}>
        <PositionalAudio autoplay loop url="/APBGM.mp3" distance={4} />
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
          onClick
        />
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

useGLTF.preload("/AP.glb");
export default AP;
