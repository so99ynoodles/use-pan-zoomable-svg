export const getPointerPosition = event => {
  if (event.offsetX) {
    return { offsetX: event.offsetX, offsetY: event.offsetY };
  }
  return {
    offsetX: event.pageX - event.currentTarget.getBoundingClientRect().left,
    offsetY: event.pageY - event.currentTarget.getBoundingClientRect().top
  };
};
