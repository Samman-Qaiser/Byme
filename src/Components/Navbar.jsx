import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
export default function Navbar() {
    const [hover,sethover]=useState(true)
    const ref=useRef()
    function menuclose(){
   
        var sidemenu=document.querySelector(".side-menu")
        sidemenu.style.right="-100%"
        sethover(true)
    }
    function menuopen(){
     
        var sidemenu=document.querySelector(".side-menu")
        sidemenu.style.right="-5%"
      
//   gsap.from(".nav-h-con h1", {
//     x: "100%",
//     opacity: 0,
//     stagger: 0.3, // Delays each animation by 0.3 seconds
//     duration: 1,  // Adjust the duration if necessary
//   });

        sethover(false)
    }
  return (
    <>
      <div className="nav-con" ref={ref}>
        <h1>
          By
          <br />
          &nbsp; &nbsp; Me Studio
        </h1>
        <div className={`${hover ? "menu-circle" : "menu-cross"}`}   onClick={hover ? menuopen : menuclose} ></div>
      </div>
      <div className="side-menu">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            height: "70%",
          }}
          className="nav-hover"
        >
          {["HOME", "ABOUT US", "CONTACT US", "WORK"].map((item) => {
            return (
              <>
                <div className="nav-h-con">
                  <h1 className="nav-h-up">{item}</h1>
                  <h1 className="nav-h-low">{item}</h1>
                </div>
              </>
            );
          })}
        </div>
        <div style={{height:"20%",display:"flex" ,gap:"1rem"}}>
             <p>FaceBook</p><p>Instagram</p>
             <p>LinkedIN</p> <p>Twitter</p>
        </div>
      </div>
    </>
  );
}
