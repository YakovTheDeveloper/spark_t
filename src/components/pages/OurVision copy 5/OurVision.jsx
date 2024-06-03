import React from 'react';
import styles from './OurVision.module.css';
import Lines from '../../../assets/blur/radial_lines.png';

const OurVision = () => {
	return (
		<div className={styles.container}>
			<h1>Our Vision</h1>
			<p className={styles.text}>
				We are committed to revolutionizing the Solana ecosystem with our state-of-the-art MEV infrastructure. Our
				mission is to foster a fair and competitive environment for validators and searchers alike.
			</p>
			<img src={Lines} alt='background' />
		</div>
	);
};

export default OurVision;
