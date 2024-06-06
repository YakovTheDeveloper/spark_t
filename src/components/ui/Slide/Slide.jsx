import React, { forwardRef } from 'react';
import styles from './Slide.module.css';
import classNames from 'classnames';
import useOnScreen from '../../../hooks/useOnScreen';

const Slide = (props, ref) => {
	const { children, className = null, id = '' } = props;

	return (
		<section ref={ref} className={classNames(styles.slide, id && styles[id], className)}>
			{children}
		</section>
	);
};

export default forwardRef(Slide);
