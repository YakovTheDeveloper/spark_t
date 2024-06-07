import React, { forwardRef } from 'react';
import styles from './Slide.module.css';
import classNames from 'classnames';
import useOnScreen from '../../../hooks/useOnScreen';

const Slide = (props, ref) => {
	const { children, className = null, id = '' } = props;

	console.log('id', id);

	return (
		<section ref={ref} className={classNames(styles.slide, id && styles[id], className)}>
			{children}
		</section>
	);
};

const Forwarded = forwardRef(Slide);

export default React.memo(Forwarded);
