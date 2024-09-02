import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Box,
  Environment,
  Text,
  useTexture,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { MeshWobbleMaterial, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { DirectionalLightHelper } from "three";
function Landing() {
  function Torus() {
    const ref = useRef();
    useFrame((state, delta) => {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.2;
    });

    return (
      <>
        <mesh ref={ref}>
          <torusGeometry args={[1.7, 0.7, 30]} />
          <MeshTransmissionMaterial transmission={0} color={"#468BF3"} />
        </mesh>
      </>
    );
  }
  function Capsule({ position }) {
    const ref = useRef();
    useFrame((state, delta) => {
      ref.current.rotation.x += delta * 2;
      ref.current.rotation.y += delta * 2;
    });

    return (
      <>
        <mesh ref={ref} position={position}>
          <capsuleGeometry args={[0.5, 0.3, 32, 64]} />

          <meshStandardMaterial color={"white"} />
        </mesh>
      </>
    );
  }
  return (
    <>
      <div className="landing-con">
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            top: "5vh",
          }}
        >
          <Canvas>
            <OrbitControls
              enableDamping={false}
              enablePan={false}
              enableZoom={false}
            />
            <Environment preset="city" />
            <ambientLight />
            <Torus />
  
          </Canvas>
        </div>
        <div className="land-left">
          <h1>REDIFINE</h1>
          <p>
            Pick a plan, submit a job request, and your project will kickoff
            within 24 hours.
          </p>
        </div>
        <div className="land-right">
          <h1>PREMIUM</h1>
        </div>
      </div>
    </>
  );
}

export default Landing;
