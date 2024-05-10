import React from 'react'

function Blinking() {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200" height="100%"
    viewBox="0 0 177 238" enable-background="new 0 0 177 238" xmlSpace="preserve">
       <g id="Page-1">
           <g id="explainee-icon" transform="translate(1.000000, 0.000000)">
               <path className="brm" fill="#2D2D2D" stroke="#2D2D2D" d="M87.5,0L87.5,0c-3,0-5.5,3.6-5.5,8v24c0,4.4,2.5,8,5.5,8l0,0c3,0,5.5-3.6,5.5-8
                   V8C93,3.6,90.5,0,87.5,0z"/>
               <path className="brr" fill="#2D2D2D" stroke="#2D2D2D" d="M165.2,23.7L165.2,23.7c-2.6-1.5-6.6,0.4-8.8,4.2l-12,20.8
                   c-2.2,3.8-1.9,8.2,0.8,9.7l0,0c2.6,1.5,6.6-0.4,8.8-4.2l12-20.8C168.2,29.6,167.9,25.3,165.2,23.7z"/>
               <path className="brl" fill="#2D2D2D" stroke="#2D2D2D" d="M9.8,23.8L9.8,23.8c-2.6,1.5-3,5.9-0.8,9.7l12,20.8c2.2,3.8,6.1,5.7,8.8,4.2
                   l0,0c2.6-1.5,3-5.9,0.8-9.7l-12-20.8C16.3,24.1,12.4,22.2,9.8,23.8z"/>
       
                <g className="eye">
                    <ellipse className="l1" fill="maroon" stroke="#2D2D2D" cx="87.5" cy="149.5" rx="87.5" ry="87.5"/>
                    <circle className="l2" fill="#2D2D2D" cx="88" cy="149" r="50"/>
                    <image xlinkHref="http://i50.photobucket.com/albums/f330/The_Flame_Returns/hypnotize.gif" id="svg_19" height="100" width="100" y="98" x="40"/>
                    <circle className="l3" fill="#2d2d2d" cx="88.5" cy="149.5" r="17.5"/>
                    
                    <g id="Mask">
                        <ellipse id="path-1_1_" fill="none" cx="87.5" cy="149.5" rx="87.5" ry="87.5"/>
                    </g>
                    <defs>
                        <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="62" width="175" height="175">
                            <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
                        </filter>
                    </defs>
                    <mask maskUnits="userSpaceOnUse" x="0" y="62" width="175" height="175" id="mask-2">
                        <g filter="url(#Adobe_OpacityMaskFilter)">
                            <ellipse id="path-1" fill="#FFFFFF" cx="87.5" cy="149.5" rx="87.5" ry="87.5"/>
                        </g>
                    </mask>
                    <rect className="lid" y="62" mask="url(#mask-2)" fill="#2D2D2D" width="175" height="175"/>
                </g>
           </g>
       </g>
    </svg>
  )
}

export default Blinking