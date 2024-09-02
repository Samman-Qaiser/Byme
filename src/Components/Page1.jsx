import React, { useEffect } from "react";
import overlay from "./overlay.png";
import image2 from "./image2.jpg"
import image1 from "./image1.jpg"
import hoverEffect from "hover-effect";
export default function () {
    useEffect(() => {
        const animate = new hoverEffect({
          parent: document.querySelector(".hover-image"),
          intensity: 0.3,
          image1: image1,
          image2:image2,
          displacementImage:
            "https://images.pexels.com/photos/1097203/pexels-photo-1097203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?raw=true",
        });
      }, []);
  return (
    <div className="page1">
      <div className="pg1-box">
        <h1>Creative</h1>
      </div>
      <div className="pg1-box">
        <h1>with</h1>
        <div className="hover-image"></div>
      </div>
      <div className="pg1-box">
        <h1>no fluff</h1>
      </div>
    </div>
  );
}
