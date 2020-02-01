# use-pan-zoomable-svg

`Create pan & zoomable svg for react easily.`
Use it to implement SVG based features like Org chart.

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
  handleTouchStart,
  handleWheel,
  reset,
 } = usePanZoomableSVG({initialViewBox, svg});
 return (
  <div>
   <svg
    ref={svg}
    onMouseDown={handleMouseDown}
    onTouchStart={handleTouchStart}
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

## Props

All props below are required.

- `x`: set minimum x of the viewBox
- `y`: set minimum y of the viewBox
- `width`: set width of the viewBox
- `height`: set height of the viewBox
- `scale`: default scale of the SVG

## returned values
- `viewBox`: set it to your svg's prop `viewBox`.
- `handleZoom`: you can manually zoom your svg component by setting a number.
- `reset`: reset your svg to initial view.
- `handleMouseDown`: set it to your svg's prop `onMouseDown`.
- `handleTouchStart`: set it to your svg's prop `onTouchStart`.
- `handleWheel`: set it to your svg's prop `onWheel`.
