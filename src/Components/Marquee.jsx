import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default function Marquee() {
    const ref=useRef()
    useGSAP(
        () => {
          gsap.to(".marquee-inner",{
           transform:"translateX(-100%)",
           repeat:-1,duration:20
          })
          
        },
        { scope: ref}
    );
  return (
   <div className='marquee-con' ref={ref}>
    <div className='marquee-inner'>
        <h1>SUBSCRIBE</h1>
        <img src="https://www.datocms-assets.com/106915/1717687151-betteroffstudio_work-loop_5.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800"/>
    </div>
    <div className='marquee-inner'>
        <h1>SUBSCRIBE</h1>
        <img src="https://www.datocms-assets.com/106915/1717687151-betteroffstudio_work-loop_5.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800"/>
    </div>
    <div className='marquee-inner'>
        <h1>SUBSCRIBE</h1>
        <img src="https://www.datocms-assets.com/106915/1717687151-betteroffstudio_work-loop_5.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800"/>
    </div>
   </div>
  )
}
