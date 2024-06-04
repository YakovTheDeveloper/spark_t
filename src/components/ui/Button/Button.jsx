import React from 'react';
import styles from './Buttons.module.css';

const Button = (props) => {
	const { children, ...rest } = props;
	return (
		<button className={styles.container} {...rest}>
			{children}
		</button>
	);
};

export default Button;
