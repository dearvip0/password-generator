import React, { FC } from 'react';

interface ButtonProps {
	handleClick?: (e: any) => void;
	label?: string;
	className: string;
	iconClass?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FC<ButtonProps> = ({
	label,
	className,
	iconClass,
	handleClick,
}) => {
	return (
		<button className={className} onClick={handleClick}>
			<i className={iconClass}></i>
			{label}
		</button>
	);
};

export default Button;
