import React from 'react';
import styles from './OurVision.module.css';
import Lines from '../../../assets/blur/radial_lines.png';
import AzimutVideo from '../../../assets/video/azimut.mp4';

const OurVision = () => {
	console.log('VISION');
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<h1>Our Mission</h1>
				<p className={styles.text}>
					We are dedicated to revolutionizing the Solana ecosystem with our innovative MEV technology. Our goal is
					to create a fair and competitive space for both validators and searchers.
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

export default React.memo(OurVision);
