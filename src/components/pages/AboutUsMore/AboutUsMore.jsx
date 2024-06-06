import React from 'react';
import styles from './AboutUsMore.module.css';
import Video from '../../../assets/video/aboutUs.mp4';
import classNames from 'classnames';

const AboutUsMore = ({ selectedLink }) => {
	const getLinkStyle = (linkPosition) => {
		if (!selectedLink) return styles.link;
		return selectedLink === linkPosition ? styles.selectedLink : styles.unselectedLink;
	};

	const text = {
		1: `After you update the validator software (just like connecting Jito), our MEV 
        system will start working on your slots. We will share the profits with you through 
        daily payouts. You can monitor all the details using the admin panel.`,
		2: `We have analyzed our competitors including jtio and found that our payout is significantly higher than others. The reasons for this are that we give more revenue to our validators, and our MEV is more communal and accurate.`,
		3: `Our relation manager will contact you and provide exact instructions on connection and will follow you around until you're completely through the process.
        You will have to update software of your validator (just like if you were connecting to jito). `,
	};

	return (
		<>
			<div className={classNames(styles.container, selectedLink == null && styles.background)}>
				{selectedLink != null && <p className={styles.info}>{text[selectedLink]}</p>}
				<div className={styles.links}>
					<p className={styles.about}>about us</p>
					<p>
						<h2>
							<a href='#' className={classNames(styles.link, getLinkStyle(1))}>
								How does it work?
							</a>
						</h2>
						<h2>
							<a href='#' className={classNames(styles.link, getLinkStyle(2))}>
								Spark-T advantages
							</a>
						</h2>
						<h2>
							<a href='#' className={classNames(styles.link, getLinkStyle(3))}>
								How to connect to Spark-T
							</a>
						</h2>
					</p>
				</div>
			</div>
			{selectedLink != null && (
				<div className={styles.videoContainer}>
					<video className={styles.video} autoPlay loop muted>
						<source src={Video} type='video/mp4' />
					</video>
				</div>
			)}
		</>
	);
};

export default AboutUsMore;
