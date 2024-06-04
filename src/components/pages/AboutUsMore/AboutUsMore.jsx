import React from 'react';
import styles from './AboutUsMore.module.css';
import Lines from '../../../assets/blur/radial_lines.png';
import classNames from 'classnames';

const AboutUsMore = ({ selectedLink }) => {
	const getLinkStyle = (linkPosition) => {
		if (!selectedLink) return styles.link;
		return selectedLink === linkPosition ? styles.selectedLink : styles.unselectedLink;
	};

	return (
		<div className={styles.container}>
			<div>
				<p className={styles.info}>
					After updating the validator software (the same process as if you were connecting jito) our MEV
					infrastructure starts working on your slots and we share the received profit with you with daily payouts.
					You will be able to track all parameters through admin panel.
				</p>
			</div>
			<div className={styles.links}>
				<p className={styles.about}>about us</p>
				<p>
					<h2>
						<a href='#' className={classNames(styles.link, getLinkStyle(1))}>
							How does it works?
						</a>
					</h2>
					<h2>
						<a href='#' className={classNames(styles.link, getLinkStyle(2))}>
							Spark-T Advanterges
						</a>
					</h2>
					<h2>
						<a href='#' className={classNames(styles.link, getLinkStyle(3))}>
							How to connect to Spark-T
						</a>
					</h2>
				</p>
			</div>
			{/* <img src={Lines} alt='background' /> */}
		</div>
	);
};

export default AboutUsMore;
