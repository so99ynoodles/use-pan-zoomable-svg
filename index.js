import {useState} from 'react';
import usePan from './src/utils/usePan';
import useZoomable from './src/utils/useZoomable';

const usePanZoomableSVG = ({
	initialViewBox = {
		scale: 1,
	},
	svg,
}) => {
	const [{x, y, width, height, currentScale}, setViewBox] = useState({
		x: initialViewBox.x / initialViewBox.scale,
		y: initialViewBox.y / initialViewBox.scale,
		height: initialViewBox.height / initialViewBox.scale,
		width: initialViewBox.width / initialViewBox.scale,
		currentScale: initialViewBox.scale,
	});
	const handleMouseDown = usePan(
		{x, y, width, height, currentScale},
		setViewBox,
	);
	const [handleZoom, handleWheel] = useZoomable(
		{x, y, width, height, currentScale},
		setViewBox,
		svg,
	);

	const reset = () => setViewBox(initialViewBox);

	return {
		viewBox: [x, y, width, height].join(' '),
		handleMouseDown,
		handleWheel,
		handleZoom,
		reset,
		scale: currentScale,
	};
};

export default usePanZoomableSVG;
