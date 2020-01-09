import { useEffect } from "react";
import { getPointerPosition } from "./helpers";

const useZoomable = (viewBox, setViewBox, svg) => {
  useEffect(() => {
    svg.current.addEventListener("wheel", e => e.preventDefault(), {
      passive: false
    });
    return svg.current.removeEventListener("wheel", e => e.preventDefault());
  }, [svg]);

  const { x, y, width, height, currentScale } = viewBox;

  const handleZoom = scale => {
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    const zoomedWidth = width * scale;
    const zoomedHeight = height * scale;
    const zoomedX = centerX - zoomedWidth / 2;
    const zoomedY = centerY - zoomedHeight / 2;

    setViewBox({
      width: zoomedWidth,
      height: zoomedHeight,
      x: zoomedX,
      y: zoomedY,
      currentScale: currentScale / scale
    });
  };

  const handleWheel = event => {
    const { offsetX, offsetY } = getPointerPosition(event);
    const scale = Math.pow(1.01, event.deltaY < 0 ? 1 : -1);
    const svg = event.currentTarget;

    const sx = offsetX / svg.clientWidth;
    const sy = offsetY / svg.clientHeight;

    const viewX = x + width * sx;
    const viewY = y + height * sy;

    const scaledWidth = width * scale;
    const scaledHeight = height * scale;
    const scaledX = viewX + scale * (x - viewX);
    const scaledY = viewY + scale * (y - viewY);

    setViewBox({
      width: scaledWidth,
      height: scaledHeight,
      x: scaledX,
      y: scaledY,
      currentScale: currentScale / scale
    });
  };

  return [handleZoom, handleWheel];
};

export default useZoomable;
