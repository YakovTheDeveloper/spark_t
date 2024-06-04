import React from 'react';
import styles from './AboutUs.module.css';
import Blur from '../../../assets/blur/blur3.png';
import Blur2 from '../../../assets/blur/blur3-mask.png';

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<div>
					<h1>about us</h1>
					<p className={styles.text}>
						Since 2020, our team has been a leading searcher in the Ethereum ecosystem. With the advent of MEV on
						Solana, we have expanded our infrastructure to support and enhance the Solana network, leveraging our
						expertise to benefit validators and searchers alike.
					</p>
				</div>
				<img
					src={Blur}
					alt='background'
					style={{
						mixBlendMode: 'color-burn',
					}}
					className={styles.blur1}
				/>
			</div>
			<img src={Blur2} alt='background' className={styles.blur2} />
		</div>
	);
};

export default AboutUs;
