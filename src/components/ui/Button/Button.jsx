import React from 'react';
import styles from './Buttons.module.css';
import classNames from 'classnames';

const Button = (props) => {
	const { children, className, ...rest } = props;
	return (
		<button className={classNames(styles.container, className)} {...rest}>
			{children}
		</button>
	);
};

export default Button;
