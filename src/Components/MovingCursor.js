'use client';
import React, { useEffect } from 'react'

export default function MovingCursor(props) {
   
  useEffect(()=>{
    var section = document.getElementById(props.Id);
    var ball = document.getElementById(props.ballId);

    

    section.addEventListener('mousemove', (e)=>{
        var x = e.clientX;
        var y = e.clientY;
        ball.style.position = 'fixed';
        ball.style.top = `${y}px`;
        ball.style.left = `${x}px`;
    });

  


  },[props.Id, props.ballId])  

  return (
    <>
      <div className="moving-ball" id={props.ballId}>
        <h5 className='fw-normal'>{props.title}</h5>
      </div>
    </>
  )
}
