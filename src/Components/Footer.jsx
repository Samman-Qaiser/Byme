import React, { useEffect, useRef } from "react";
import "./style.css";
import Marquee from "./Marquee";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
function Footer() {
  const ref = useRef();
  function mousemanager(e) {
    const div = ref.current;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    // Adjust these factors to control the intensity of the effect
    const scaleX = 1 - mouseX * 0.1;
    const scaleY = 1 - mouseY * 0.1;
    const skewX = mouseX * 0.1;
    const skewY = mouseY * 0.1;

    const perspectiveX = mouseX * 0.002;
    const perspectiveY = mouseY * 0.002;
    const matrix3d = `
${scaleX}, ${skewX}, 0, ${perspectiveX},
${skewY}, ${scaleY}, 0, ${perspectiveY},
0, 0, 1, 0,
0, 0, 0, 1
`;
    div.style.transform = `matrix3d(${matrix3d})`;
  }
  useEffect(() => {
    const div = ref.current;
    if (div) {
      div.addEventListener("mousemove", mousemanager);
    }
    return () => {
      if (div) {
        div.removeEventListener("mousemove", mousemanager);
      }
    };
  }, []);
  return (
    <div className="footer-con">
      <div
        className="matrix"
        style={{ display: "flex", alignItems: "flex-end", paddingTop: "7vh" }}
      >
        <h1 ref={ref}>CONTACT US</h1>
      </div>
      <div style={{ width: "100vw", height: "60vh" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            boxSizing: "border-box",
            padding: "0rem 1rem",
            fontSize: "2vw",
          }}
        >
          <h2>Still unsure whether our plans are right for you?</h2>
          <h2>Lets Chat</h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-around",
          boxSizing: "border-box",
          padding: "0rem 1rem",
          fontSize: "2vw",
          width:"50vw"
        }}
      >
        <div>
          <ul>
            <li>Sitemap</li>
            <li>Overview</li>
            <li>Work</li>
            <li>Feed</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
        <ul>
            <li>Legal</li>
            <li>Terms & Conditions</li>
            <li>Policy</li>
           
          </ul>
        </div>
        <div>
        <ul>
            <li>Socila</li>
            <li>LinkedIN</li>
            <li>Facebook</li>
            <li>Instagram</li>
           
          </ul>
        </div>
      </div>
      <Marquee />
    </div>
  );
}

export default Footer;
