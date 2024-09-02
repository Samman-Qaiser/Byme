import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Page2() {
  const ref = useRef();
  const movingRef = useRef();
  const h1 = useRef();
  const Images = [
    "https://i.pinimg.com/474x/f8/33/47/f83347cb8614edac57ca0a35b6d203fd.jpg",
    "https://i.pinimg.com/474x/f0/e9/ba/f0e9ba68590c118a736003e4eb5893d2.jpg",
    "https://i.pinimg.com/564x/e8/ec/d6/e8ecd6cbeafea66e9097347fb63d58ba.jpg",
    "https://i.pinimg.com/474x/cd/9d/c0/cd9dc0beae48d935f04aa27d67588ad0.jpg",
    "https://i.pinimg.com/474x/f5/25/09/f525096255f65383636fa420188a358a.jpg",
    "https://i.pinimg.com/474x/bb/44/50/bb44502bee144e171d8e214e73dd8041.jpg",
    "https://i.pinimg.com/474x/f2/4c/5c/f24c5c9492fed47bd35c484ff50989a7.jpg",
    "https://i.pinimg.com/474x/37/1c/96/371c96d48fdf29101506f052fce729a1.jpg",
    "https://i.pinimg.com/474x/56/e7/8c/56e78c93abb3802fb72cd1af053996fc.jpg",
    "https://i.pinimg.com/474x/16/15/1b/16151b580ee4844b3a2901e24bee7949.jpg",
  ];
  const services = [
    "branding",
    "branding strategy",
    "motion graphics",
    "3d animations",
    "video editing",
    "web design",
    "photography",
    "audio production",
    "naming",
    "packaging",
    "advertising",
  ];

  useEffect(() => {
    const rightDiv = ref.current.querySelector(".page2-right");
    const headings = rightDiv.querySelectorAll("h1");

    headings.forEach((heading) => {
      heading.addEventListener("mouseenter", function () {
        const img = heading.getAttribute("data-src");
        movingRef.current.style.backgroundImage = `url('${img}')`;
      });
    });
    const handleMouseMove = (dets) => {
      gsap.to(movingRef.current, {
        x: dets.clientX - 700,
        y: dets.clientY + 50,
        ease: "power3.out",
        duration: 0.5,
      });
    };

    rightDiv.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      rightDiv.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="page2" ref={ref}>
        <div className="page2-left">
          <div className="page2-moving" ref={movingRef}></div>
        </div>
        <div className="page2-right">
          {services.map((service, index) => (
            <h1 key={index} data-src={Images[index]} ref={h1}>
              {service}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}
