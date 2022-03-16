import React, { FC } from 'react';
import './Tooltip.css';
interface TooltipProps {
	message: string;
	position: string;
	displayTooltip: boolean;
}

const Tooltip: FC<TooltipProps> = ({ message, position, displayTooltip }) => {
	return (
		<>
			{displayTooltip ? (
				<div className={`tooltip-bubble tooltip-${position}`}>
					<div className='tooltip-message'>{message}</div>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Tooltip;
