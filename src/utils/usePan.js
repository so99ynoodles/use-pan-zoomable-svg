const createMouseDownFunction = (viewBox, setViewBox) => event => {
  const startX = event.clientX;
  const startY = event.clientY;

  const handleMouseMove = event => {
    const newDx = (event.pageX - startX) / viewBox.currentScale;
    const newDy = (event.pageY - startY) / viewBox.currentScale;
    const x = viewBox.x - newDx;
    const y = viewBox.y - newDy;
    setViewBox({ ...viewBox, x, y });
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener(
    "mouseup",
    () => {
      document.removeEventListener("mousemove", handleMouseMove);
    },
    { once: true }
  );
};

const createTouchStartFunction = (viewBox, setViewBox) => event => {
  switch (event.touches.length) {
    case 1:
      const touch = event.touches[0];
      const startX = touch.clientX;
      const startY = touch.clientY;
      const handleTouchMove = event => {
        const touch = event.touches[0];
        const newDx = (touch.pageX - startX) / viewBox.currentScale;
        const newDy = (touch.pageY - startY) / viewBox.currentScale;
        const x = viewBox.x - newDx;
        const y = viewBox.y - newDy;
        setViewBox({ ...viewBox, x, y });
      };
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", () => {
        document.removeEventListener("touchmove", handleTouchMove);
      });
      document.addEventListener("touchcancel", () => {
        document.removeEventListener("touchmove", handleTouchMove);
      });
      break;
    default:
      break;
  }
};

const usePan = (viewBox, setViewBox) => {
  const handleMouseDown = createMouseDownFunction(viewBox, setViewBox);
  const handleTouchStart = createTouchStartFunction(viewBox, setViewBox);
  return [handleMouseDown, handleTouchStart];
};

export default usePan;
