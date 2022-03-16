import React, { FC } from 'react';
import './Header.css';
const Header: FC = () => {
	return (
		<div className='row'>
			<div className='col-md-12 header'>
				<h1 className='h1'>Strong Password Generator</h1>
				<div className='col-md-12'>
					<h4>Create strong passwords with Password Generator</h4>
				</div>
			</div>
		</div>
	);
};

export default Header;
