import React from 'react';
import LogoIcon from '../../../assets/logo-small.png';
import LogoIconContrast from '../../../assets/logo-small-contrast.png';
import styles from './Logo.module.css';

const Logo = ({ contrastLogo }) => {
	return (
		<div className={styles.container}>
			<img src={contrastLogo ? LogoIconContrast : LogoIcon} alt='logo' />
			<p>spark-t</p>
		</div>
	);
};

export default Logo;
