import React, { useEffect, useRef } from 'react';
import styles from './OurVision.module.css';
import Lines from '../../../assets/blur/radial_lines.png';
import AzimutVideo from '../../../assets/video/azimut.mp4';
import useOnScreen from '../../../hooks/useOnScreen';

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.2,
};

const OurVision = () => {
	const videoRef = useRef();
	const onScreen = useOnScreen(videoRef, options);

	useEffect(() => {
		console.log('onScreen', videoRef.current?.querySelector('video'));
		onScreen && videoRef.current?.querySelector('video').play();
		!onScreen && videoRef.current?.querySelector('video').pause();
	}, [onScreen]);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.inner}>
					<h1>Our Mission</h1>
					<p className={styles.text}>
						We are dedicated to revolutionizing the Solana ecosystem with our innovative MEV technology. Our goal
						is to create a fair and competitive space for both validators and searchers.
					</p>
				</div>
			</div>
			<div className={styles.videoContainer} ref={videoRef}>
				<video className={styles.video} loop muted>
					<source src={AzimutVideo} type='video/mp4' />
				</video>
			</div>
		</>
	);
};

export default React.memo(OurVision);
