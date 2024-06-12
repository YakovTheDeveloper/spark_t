import React from 'react';
import styles from './Roadmap.module.css';
const Roadmap = () => {
	return (
		<div className={styles.container}>
			<h1>Roadmap</h1>
			<div className={styles.content}>
				<article className={styles.point}>
					<h2>Token Launch</h2>
					<p className={styles.description}>
						We plan to launch our token, which can be repurchased with Spark-t revenue
					</p>
					<p>13.12.2024</p>
				</article>
				<article className={styles.point}>
					<h2>Future Developments</h2>
					<p className={styles.description}>
						Include other upcoming milestones and development relevant to your project
					</p>
					<p>13.12.2024</p>
				</article>
			</div>
		</div>
	);
};

export default Roadmap;
