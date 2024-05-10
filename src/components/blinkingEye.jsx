"use client";
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import Blinking from "./blinking";

function BlinkingEyes() {

  useLayoutEffect(() => {
    gsap.timeline({repeat:-1,repeatDelay:5})
    .from(".lid",.2,{attr:{height:0}})
    .to([".brl",".brm",".brr"],.1, {scaleY:.7, transformOrigin:"50% 100%"},0)
    .to(".eye",.2,{scaleY:.8, transformOrigin:"50% 50%"},0)
    .to(".lid",.1,{attr:{height:0}})
    .to([".brl",".brm",".brr"],.1, {scaleY:1, transformOrigin:"50% 100%"},"-=0.1")
    .to(".eye",.1,{scaleY:1, transformOrigin:"50% 50%"},"-=0.1")

    return () => {};
  }, []);
  
  return (
    <div className="eyes-both absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 h-44 flex justify-between items-center">
        <Blinking />
        <Blinking />
    </div>
  );
}

export default BlinkingEyes;
