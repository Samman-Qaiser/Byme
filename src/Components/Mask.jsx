import React from "react";
import "./style.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Canvas, useFrame ,  useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Box,
  Environment,
  Text,
  useTexture,

  MeshTransmissionMaterial,
  Text3D,
} from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from "three";
import { MeshWobbleMaterial, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { DirectionalLightHelper } from "three";
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './img1.png'
import image4 from './img2.png'
import image5 from './img3.png'
import image6 from './img4.jpg'
export default function Mask() {
  const ref = useRef();

  function Cube({ position }) {
    const texture1= useLoader(TextureLoader, image1)
    const texture2=useLoader(TextureLoader, image2)
    const texture3=useLoader(TextureLoader, image3)
    const texture4=useLoader(TextureLoader, image4)
    const texture5=useLoader(TextureLoader, image5)
    const texture6=useLoader(TextureLoader, image6)
    const ref = useRef();
    useFrame((state, delta) => {
      // ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.2;
      ref.current.rotation.z += delta * 0.2;
    });

    return (
      <>
        <mesh ref={ref} position={position} >
          <boxGeometry args={[3,3,3]} />
           <meshStandardMaterial  map={texture1} attach="material-0" />
           <meshStandardMaterial  map={texture2} attach="material-1"/>
           <meshStandardMaterial  map={texture3} attach="material-2"/>
           <meshStandardMaterial  map={texture4} attach="material-3"/>
           <meshStandardMaterial  map={texture5} attach="material-4"/>
           <meshStandardMaterial  map={texture6} attach="material-5"/>
        </mesh>
    </>
    )}
gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          scrub: true,
        
          start: "50% 50%",
          end: "250% 50%",
          pin: true,
        },
      });
      tl.to(".masking", {
        maskSize: "200%",
      });
      tl.to(".masking2", {
        maskSize: "200%",
      });
    },
    { scope: ref }
  );
  return (
    <>
      <div className="mask-con" ref={ref}>
        <div className="masking">
          <div className="mask-img">
            <div style={{ width: "100%", height: "80%" }}>
              <div className="inner-text">
                <h1>PREMIUM</h1>
              </div>
              <div className="inner-text">
                <h1>WO</h1>{" "}
                <video muted autoPlay loop>
                  <source src="https://player.vimeo.com/progressive_redirect/playback/964456701/rendition/1080p/file.mp4?loc=external&signature=ed2837df3216140eefd132460dd1a1e5b5c4a64d42d09edf23898493d96b6e73"></source>
                </video>
                <h1>RK</h1>
              </div>
            </div>
            <div className="masking2">
              <div className="mask-img2">
              <div style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",padding:"0rem 2rem"}}>
              <h1 style={{color:"#3c51e5",fontFamily:"grotesk",fontSize:"15vw",lineHeight:"10vw"}}>PROJECTS</h1>
              <p style={{color:"whitesmoke" ,width:"15%"}}>
            Pick a plan, submit a job request, and your project will kickoff
            within 24 hours.
            Pick a plan, submit a job request, and your project will kickoff
            within 24 hours.
          </p>
              </div> 
              <div style={{position:"absolute",top:0,right:0,width:"100%",height:"100%"}}>
              <Canvas   >
           
           <ambientLight intensity={0.2}/>
           <directionalLight position={[2, 1, 1]}/>
             <Environment preset="city" />
              <OrbitControls  enableRotate={true} enableZoom={false} enableDamping={false} enablePan={false}/>
             <Cube position={[2, 0, 0]} />
           </Canvas>
              </div>
            
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
