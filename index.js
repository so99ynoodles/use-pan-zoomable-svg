const {useState} = require('react');
const draggable = require('./src/utils/draggable');
const zoomable = require('./src/utils/zoomable');

const useZoomableSVG = ({initialViewBox}) => {
	const [{x, y, width, height}, setViewBox] = useState(initialViewBox);
	const handleMouseDown = draggable({x, y, width, height}, setViewBox);
	const [handleZoom, handleWheel] = zoomable({x, y, width, height}, setViewBox);
	const reset = () => setViewBox(initialViewBox);

	return {
		viewBox: [x, y, width, height].join(' '),
		handleMouseDown,
		handleZoom,
		handleWheel,
		reset,
	};
};

module.exports = useZoomableSVG;
