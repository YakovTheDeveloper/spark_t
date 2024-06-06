import React, { useState } from 'react';
import styles from './Input.module.css';
import CrossIcon from '../../../assets/icons/cross-icon.svg?react';
import classNames from 'classnames';
const Input = ({ label, value, onChange, onClear, className, size, ...props }) => {
	return (
		<div className={classNames(styles.container, styles[`container-${size}`], className)}>
			<label htmlFor='input'>{label}</label>
			<div className={styles.wrapper}>
				<input {...props} id='input' type='text' value={value} onChange={onChange} />

				<button
					type='button'
					onClick={onClear}
					style={{
						visibility: value.length > 0 ? 'visible' : 'hidden',
					}}
				>
					<CrossIcon />
				</button>
			</div>
		</div>
	);
};

export default Input;
