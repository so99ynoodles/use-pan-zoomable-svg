# use-zoomable-svg

`Easily create zoomable svg for react.`

## Get Started

```console
npm i use-zoomable-svg
```
or
```console
yarn add use-zoomable-svg
```

## How to use
View Demo

```react.jsx
import React from 'react';
import useZoomableSVG from './useZoomableSVG';

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
