# use-pan-zoomable-svg

`Create pan & zoomable svg for react easily.`

## Get Started!

`npm install use-pan-zoomable-svg`
or
`yarn add use-pan-zoomable-svg`


## How to use ([View Demo](https://codesandbox.io/s/use-pan-zoomable-svg-gb7su))

![use-pan-zoomable-svg](https://thumbs.gfycat.com/DimwittedSpiffyAmericanmarten-small.gif)

```react.jsx
import React, { useRef } from 'react';
import usePanZoomableSVG from 'use-pan-zoomable-svg';

const initialViewBox = {
 x: -100,
 y: -100,
 width: 200,
 height: 200,
 scale: 1
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
