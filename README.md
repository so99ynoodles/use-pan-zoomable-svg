# use-pan-zoomable-svg

`Create pan & zoomable svg for react easily.`

Preparing for npm publish & TS support


## How to use

![use-pan-zoomable-svg](https://thumbs.gfycat.com/DimwittedSpiffyAmericanmarten-small.gif)

```react.jsx
import React, { useRef } from 'react';
import usePanZoomableSVG from 'use-pan-zoomableSVG';

const initialViewBox = {
 x: -100,
 y: -100,
 width: 200,
 height: 200,
};

const App = () => {
 const svg = useRef();
 const { width, height } = initialViewBox;
 const {
  viewBox,
  handleZoom,
  handleMouseDown,
  handleWheel,
  reset,
 } = useZoomableSVG({initialViewBox});
 return (
  <div>
   <svg
    ref={svg}
    onMouseDown={handleMouseDown}
    onWheel={handleWheel}
    viewBox={viewBox}
    width={width}
    height={height}
   >
    <circle cx="0" cy="0" r="20"></circle>
   </svg>
   <button onClick={() => handleZoom(1 / 1.3)}>+</button>
   <button onClick={() => handleZoom(1.3)}>-</button>
   <button onClick={reset}>reset</button>
  </div>
 );
};

```
