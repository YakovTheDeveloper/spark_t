import React from 'react';
import styles from './Footer.module.css';

import Blur2 from '../../../assets/blur/blur2.png';
import Blur from '../../../assets/blur/blur1.png';
import classNames from 'classnames';
import Logo from '../../ui/Logo/Logo';

const Footer = () => {
	return (
		<div className={styles.container}>
			<nav>
				<ul>
					<li className={styles.listItemTitle}>Contacts</li>
					<li className={styles.listItem}>mail@srark.t</li>
					<li className={styles.listItem}>Twitter</li>
					<li className={styles.listItem}>Telegram</li>
				</ul>
				<ul>
					<li className={styles.listItemTitle}>Links</li>
					<li className={styles.listItem}>FAQ</li>
					<li className={styles.listItem}>Case Studies</li>
					<li className={styles.listItem}>Blog</li>
				</ul>
			</nav>
			<div className={styles.additionals}>
				<Logo size={'small'} />
				<p>all rights reserved 2024</p>
			</div>
		</div>
	);
};

export default Footer;
