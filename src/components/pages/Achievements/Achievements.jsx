import React from 'react';
import styles from './Achievements.module.css';
import Blur from '../../../assets/blur/blur-achievements.png';

const Item = ({ children }) => {
	return (
		<div className={styles.item}>
			<h2>$5M Paid to Solana Validators</h2>
			<p>Over the course of our operations, we have paid Solana validators more than $5 million.</p>
			{children}
		</div>
	);
};

const Achievements = () => {
	return (
		<div className={styles.container}>
			<h1>Statistics and Achievements</h1>
			<div className={styles.items}>
				{[1, 2, 3, 4, 5].map((item) => (
					<Item>
						<img src={Blur} alt='background' className={styles.blur} />
					</Item>
				))}
			</div>
		</div>
	);
};

export default Achievements;
