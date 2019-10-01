import {useState} from 'react';
import usePan from './src/utils/usePan';
import useZoomable from './src/utils/useZoomable';

const usePanZoomableSVG = ({
	initialViewBox = {
		currentScale: 1,
	},
	svg,
}) => {
	const [{x, y, width, height, currentScale}, setViewBox] = useState({
		x: initialViewBox.x / initialViewBox.currentScale,
		y: initialViewBox.y / initialViewBox.currentScale,
		height: initialViewBox.height / initialViewBox.currentScale,
		width: initialViewBox.width / initialViewBox.currentScale,
		currentScale: initialViewBox.currentScale,
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
		currentScale,
	};
};

export default usePanZoomableSVG;
