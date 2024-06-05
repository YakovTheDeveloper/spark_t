import React from 'react';
import styles from './OurVision.module.css';
import Lines from '../../../assets/blur/radial_lines.png';
import AzimutVideo from '../../../assets/video/azimut.mp4';

const OurVision = () => {
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<h1>Our Vision</h1>
				<p className={styles.text}>
					We are committed to revolutionizing the Solana ecosystem with our state-of-the-art MEV infrastructure.
					Our mission is to foster a fair and competitive environment for validators and searchers alike.
				</p>
			</div>
			<div className={styles.videoContainer}>
				<video className={styles.video} autoPlay loop muted>
					<source src={AzimutVideo} type='video/mp4' />
				</video>
			</div>
		</div>
	);
};

export default OurVision;
