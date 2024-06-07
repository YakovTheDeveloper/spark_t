import React from 'react';
import LogoIcon from '../../../assets/logo-small.png';
import LogoIconContrast from '../../../assets/logo-small-contrast.png';
import styles from './Logo.module.css';
import classNames from 'classnames';

const Logo = ({ contrast, size }) => {
	return (
		<div className={styles.container}>
			<img
				src={contrast ? LogoIconContrast : LogoIcon}
				alt='logo'
				className={classNames(size && styles[`logo-${size}`])}
			/>
			<p>spark-t</p>
		</div>
	);
};

export default Logo;
