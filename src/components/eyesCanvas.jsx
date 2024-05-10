"use client"
import { useLayoutEffect, useState } from "react"
import gsap from "gsap"

function EyesCanvas() {

    useLayoutEffect(()=>{
        const eyesCanvas = document.getElementById('eyes-canvas')

        function eyes(x, y, size, event) {
            var canvas = document.createElement("canvas"),
                context = canvas.getContext("2d");
            eyesCanvas.appendChild(canvas);
            canvas.style.position = "absolute";
            canvas.style.left = (x - size - 5) + "px";
            canvas.style.top = (y - size  / 2 - 5) + "px";
            
            var rect = canvas.getBoundingClientRect();
            canvas.width = size * 2 + 10;
            canvas.height = size + 10;
          
            onMouseMove(event);

            function onMouseMove(event) {
                var x = event.clientX - rect.left,
                    y = event.clientY - rect.top;
                context.clearRect(0, 0, size * 2 + 10, size + 10);
                drawEye(x, y, size / 2 + 5, size / 2 + 5);
                drawEye(x, y, size * 1.5 + 5, size / 2 + 5);
            }
            
            function drawEye(x, y, cx, cy) {
            const colorsOfEye = ['green', 'darkblue', 'gray', 'goldenrod', 'maroon', 'black']
            var dx = x - cx,
                dy = y - cy,
                angle = Math.atan2(dy, dx);
            context.save();
            context.translate(cx, cy);
            context.rotate(angle);
            context.beginPath();
            context.arc(0, 0, size / 2, 0, Math.PI * 2);
            context.stroke();
            context.fillStyle = "white";
            context.fill()
            context.beginPath();
            // context.fillStyle = colorsOfEye[Math.floor(Math.random()*colorsOfEye.length)];
            context.fillStyle = 'maroon';
            context.arc(size * 0.4, 0, size * 0.1, 0, Math.PI * 2);
            context.fill();
            context.restore();
            }
            
            eyesCanvas.addEventListener("mousemove", onMouseMove);
          
        }
        eyesCanvas.addEventListener("click", function(event) {
            eyes(event.clientX, event.clientY, 85, event);
        });
        
        return() => {
            eyesCanvas.removeEventListener("click", function(event) {
                eyes(event.clientX, event.clientY, 85, event);
            });
        }
    }, [])
  return (
    <div id="eyes-canvas" className=" select-none cursor-cell absolute w-full h-full flex items-center justify-center drop-shadow-sm "
    >
        <span className="animate-ping text-orange-800 font-bold text-2xl">Click</span>
    </div>
  )
}

export default EyesCanvas