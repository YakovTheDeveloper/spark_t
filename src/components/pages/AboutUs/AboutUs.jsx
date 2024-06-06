import React from 'react';
import styles from './AboutUs.module.css';
import Mask from '../../../assets/blur/blur-mask-group-about-us.png';
import Mask2 from '../../../assets/blur/blur3-mask.png';
import Mask3 from '../../../assets/blur/blur-mask-group-about-us.png';

const AboutUs = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>About Us</h1>
					<p className={styles.text}>
						Since 2020, our team has been a leading searcher in the Ethereum ecosystem. With the launch of MEV on
						Solana, we have expanded our infrastructure to support and enhance the Solana network, leveraging our
						expertise to benefit both - validators and searchers
					</p>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
