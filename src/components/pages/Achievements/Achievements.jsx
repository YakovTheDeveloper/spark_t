import React from 'react';
import styles from './Achievements.module.css';
import Lines from '../../../assets/blur/blur-achievements.png';

const Item = () => {
	return (
		<div className={styles.item}>
			<h2>$5M Paid to Solana Validators</h2>
			<p>Over the course of our operations, we have paid Solana validators more than $5 million.</p>
		</div>
	);
};

const Achievements = () => {
	return (
		<div className={styles.container}>
			<h1>Statistics and Achievements</h1>
			<div className={styles.items}>
				{[1, 2, 3, 4, 5].map((item) => (
					<Item />
				))}
			</div>
			<img src={Lines} alt='background' />
		</div>
	);
};

export default Achievements;
