import React from 'react';
import styles from './Slide.module.css';
import classNames from 'classnames';

const Slide = ({ children, className }) => {
	return <section className={classNames(styles.slide, className)}>{children}</section>;
};

export default Slide;
