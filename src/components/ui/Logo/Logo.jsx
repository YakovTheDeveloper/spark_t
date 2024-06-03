import React from 'react';
import LogoIcon from '../../../assets/logo-small.png';
import styles from './Logo.module.css';

const Logo = () => {
	return (
		<div className={styles.container}>
			<img src={LogoIcon} alt='logo' />
			<p>spark-t</p>
		</div>
	);
};

export default Logo;
