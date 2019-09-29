# use-pan-zoomable-svg

`Easily create zoomable svg for react.`

Preparing for npm publish & TS support


## How to use

![use-pan-zoomable-svg](https://thumbs.gfycat.com/DimwittedSpiffyAmericanmarten-small.gif)

```react.jsx
import React from 'react';
import usePanZoomableSVG from 'use-pan-zoomableSVG';

const initialViewBox = {
 x: -100,
 y: -100,
 width: 200,
 height: 200,
};

const App = () => {
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
    onMouseDown={handleMouseDown}
    onWheel={handleWheel}
    viewBox={viewBox}
    width="200"
    height="200"
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
