
import React, { useEffect, useRef } from 'react'
import useWindow from './usewindows'
import './style.css'
export default function Scene() {
  const { dimension } = useWindow();
  const canvas = useRef();
  const prevPosition = useRef(null)

  useEffect( () => {
    dimension.width > 0 && init();
  }, [dimension])

  const init = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, dimension.width, dimension.height); 
    ctx.globalCompositeOperation = "destination-out";
  }
  //made function from internet 
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e;
    const noOfcircles=Math.max(Math.abs(movementX),Math.abs(movementY))
    console.log(noOfcircles)
    if(prevPosition.current!=null){
     var {x,y}=prevPosition.current
     for(let i=0;i<noOfcircles;i++){
      const targetX = lerp(x, clientX, (1 / noOfcircles) * i);
      const targetY = lerp(y, clientY, (1 / noOfcircles) * i);
      draw(targetX,targetY,30)
     }
    }
   
    prevPosition.current={
     x:clientX,
     y:clientY
    }
  }

  const draw = (x, y, radius) => {
    const ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <div className='can-con'>
 
    {dimension.width===0 && <div style={{backgroundColor:"black",width:"100%",height:"100%"}}></div>}
      <canvas ref={canvas} onMouseMove={manageMouseMove} height={dimension.height} width={dimension.width}>

      </canvas>
    </div>
  )
}