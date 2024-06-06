import React, { useState } from 'react';
import styles from './Input.module.css';
import CrossIcon from '../../../assets/icons/cross-icon.svg?react';
import classNames from 'classnames';
const Input = ({ label, value, onChange, onClear, className, ...props }) => {
	const [inputValue, setInputValue] = useState(value || '');

	const handleChange = (event) => {
		setInputValue(event.target.value);
		onChange(event.target.value);
	};

	const handleClear = () => {
		setInputValue('');
		onClear();
	};

	return (
		<div className={classNames(styles.container, className)}>
			<label htmlFor='input'>{label}</label>
			<div className={styles.wrapper}>
				<input {...props} id='input' type='text' value={inputValue} onChange={handleChange} />

				<button
					type='button'
					onClick={handleClear}
					style={{
						visibility: inputValue.length > 0 ? 'visible' : 'hidden',
					}}
				>
					<CrossIcon />
				</button>
			</div>
		</div>
	);
};

export default Input;
