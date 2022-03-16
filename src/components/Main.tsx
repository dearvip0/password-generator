import React, { FC } from 'react';
import Display from './display/Display';
import Header from './header/Header';

const Main: FC = () => {
	return (
		<>
			<Header />
			<Display />
		</>
	);
};

export default Main;
