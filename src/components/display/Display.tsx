import React, { FC, useState, useRef } from 'react';
import Button from '../container/button/Button';
import Container from '../container/Container';
import './Display.css';
import { generatePassword, copyToClipBoard } from '../../utils/Helper';
import Tooltip from '../container/tooltip/Tooltip';

const Display: FC = () => {
	const [rangeValue, setRange] = useState<any>();
	const [password, setPassword] = useState<string | undefined>('');
	const [passwordProps, setPasswordProps] = useState<any>();
	const [tooltip, setTooltip] = useState(false);
	const [type, setType] = useState('password');
	const passwordRef = useRef(null);
	let pwdDescription = '';

	const generateNewPassword = () => {
		const pwd =
			rangeValue > 3
				? generatePassword(passwordProps, rangeValue)
				: generatePassword(passwordProps, 3);
		setPassword(pwd);
	};

	const copyClipboard = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		copyToClipBoard(passwordRef.current);
		setTooltip(true);
		setTimeout(() => {
			setTooltip(false);
		}, 2000);
	};

	const setBackgroundColor = (password: any) => {
		if (password && password.length === 1 && password.length <= 5) {
			pwdDescription = 'Bad password';
			return '#cb473e';
		} else if (password && password.length >= 6 && password.length <= 10) {
			pwdDescription = 'Weak password';
			return '#f07d58';
		} else if (password && password.length >= 10) {
			pwdDescription = 'Strong password';
			return '#55a95a';
		} else {
			pwdDescription = 'Bad password';
			return '#cb473e';
		}
	};

	const onSelectTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setType(e.target.value);
	};

	return (
		<>
			<div className='row'>
				<select
					name='type'
					value={type}
					onChange={onSelectTag}
					className='form-select form-select-lg mb-3'
					style={selectTagStyle}>
					<option value='password'>Password</option>
					<option value='pin'>PIN</option>
				</select>
			</div>
			<div className='row'>
				<div
					className='col-12 password-display-container'
					style={{ backgroundColor: setBackgroundColor(password) }}>
					<div style={{ width: '100%' }}>
						<div className='password-display'>
							<input
								ref={passwordRef}
								type='text'
								value={password}
								className='password-display-input'
								readOnly
							/>
						</div>

						<div className='password-description'>
							{password && password.length >= 10 ? (
								<>
									<i className='fas fa-check-circle'></i> {pwdDescription}
								</>
							) : (
								<>
									<i className='fas fa-exclamation-circle'></i> {pwdDescription}
								</>
							)}
						</div>
					</div>

					<div className='password-display-icons'>
						<Button
							handleClick={copyClipboard}
							className='copy-btn'
							iconClass='far fa-copy'
						/>
						<Button
							className='generate-btn'
							iconClass='fas fa-sync-alt'
							handleClick={() => generateNewPassword()}
						/>

						<Tooltip
							message='Copied'
							position='left'
							displayTooltip={tooltip}
						/>
					</div>
				</div>
			</div>
			<Container
				type={type}
				setPasswordProps={setPasswordProps}
				setPassword={setPassword}
				setRange={setRange}
				passwordRef={passwordRef}
			/>
		</>
	);
};

const selectTagStyle = {
	backgroundColor: 'inherit',
	color: '#506175',
	width: '20%',
	height: 'auto',
	marginLeft: '-4px',
};

export default Display;
