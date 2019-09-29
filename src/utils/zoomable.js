const getPointerPosition = event => {
	if (event.offsetX) {
		return {offsetX: event.offsetX, offsetY: event.offsetY};
	}
	return {
		offsetX: event.pageX - event.currentTarget.getBoundingClientRect().left,
		offsetY: event.pageY - event.currentTarget.getBoundingClientRect().top,
	};
};

const zoomable = (viewBox, setViewBox) => {
	const {x, y, width, height} = viewBox;

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
		});
	};

	const handleWheel = event => {
		const {offsetX, offsetY} = getPointerPosition(event);
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
		});
	};

	return [handleZoom, handleWheel];
};

export default zoomable;
