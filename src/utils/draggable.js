const createMouseDownFunction = (viewBox, setViewBox) => event => {
	const startX = event.clientX;
	const startY = event.clientY;
	const handleMouseMove = event => {
		const newDx = event.pageX - startX;
		const newDy = event.pageY - startY;
		const x = viewBox.x - newDx;
		const y = viewBox.y - newDy;
		setViewBox({...viewBox, x, y});
	};
	document.addEventListener('mousemove', handleMouseMove);
	document.addEventListener(
		'mouseup',
		() => {
			document.removeEventListener('mousemove', handleMouseMove);
		},
		{once: true},
	);
};

const draggable = (viewBox, setViewBox) => {
	const handleMouseDown = createMouseDownFunction(viewBox, setViewBox);
	return handleMouseDown;
};

module.exports = draggable;
