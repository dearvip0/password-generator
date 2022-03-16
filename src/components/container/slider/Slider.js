import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Slider.css';
const Slider = ({ step, min, max, value, defaultLength, onChangeValue }) => {
	let [range, setRange] = useState();

	const rangeRef = useRef();

	const activeRangeColor = '#4aa1f3';
	const rangeBackground = '#d7dcdf';

	const handleChange = (max) => (e) => {
		onChangeValue(e);
		const value = e.target.value;
		setRange(value);
		const progress = (value / max) * 100 + '%';
		const newBackgroundStyle = `linear-gradient(90deg, ${activeRangeColor} 0% ${progress}, ${rangeBackground} ${progress} 100%)`;
		rangeRef.current.style.background = newBackgroundStyle;
	};

	if (range !== defaultLength || !range) {
		range = defaultLength;
	}

	const progressValue = range;
	const progress = (progressValue / max) * 100 + '%';
	const styleInput = {
		background: `linear-gradient(90deg, ${activeRangeColor} 0% ${progress}, ${rangeBackground} ${progress} 100%)`,
	};
	return (
		<div className='slider-container'>
			<div className='slider'>
				<input
					ref={rangeRef}
					type='range'
					className='range-slider'
					step={step}
					min={min}
					max={max}
					defaultLength={10}
					value={value}
					onChange={handleChange(max)}
					style={styleInput}
				/>
				<span className='range-slider-value'>{progressValue}</span>
			</div>
		</div>
	);
};

Slider.propTypes = {
	step: PropTypes.number.isRequired,
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	defaultLength: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
	onChangeValue: PropTypes.func.isRequired,
};

export default Slider;
