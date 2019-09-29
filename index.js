import {useState} from 'react';
import usePan from './src/utils/usePan';
import useZoomable from './src/utils/useZoomable';

const usePanZoomableSVG = ({initialViewBox}) => {
	const [{x, y, width, height}, setViewBox] = useState(initialViewBox);
	const handleMouseDown = usePan({x, y, width, height}, setViewBox);
	const [handleZoom, handleWheel] = useZoomable(
		{x, y, width, height},
		setViewBox,
	);
	const reset = () => setViewBox(initialViewBox);

	return {
		viewBox: [x, y, width, height].join(' '),
		handleMouseDown,
		handleZoom,
		handleWheel,
		reset,
	};
};

export default usePanZoomableSVG;
