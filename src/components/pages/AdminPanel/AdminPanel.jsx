import React from 'react';
import styles from './AdminPanel.module.css';
import Lines from '../../../assets/blur/radial_lines.png';

const AdminPanel = () => {
	return (
		<div className={styles.container}>
			<h1>Admin panel for Validatiors</h1>
			<p className={styles.text}>
				Our user-friendly admin panel allows for seamless management of your validator settings and MEV strategies.
			</p>
		</div>
	);
};

export default AdminPanel;
