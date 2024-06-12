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
					<li className={styles.listItem}>
						<a href='mailto:mail@srark.t'>Email</a>
					</li>
					<li className={styles.listItem}>
						<a href='#'>Twitter</a>
					</li>
					<li className={styles.listItem}>
						<a href='#'>Telegram</a>
					</li>
				</ul>
				<ul>
					<li className={styles.listItemTitle}>Links</li>
					<li className={styles.listItem}>
						<a href='#'>FAQ</a>
					</li>
					<li className={styles.listItem}>
						<a href='#'>Case Studies</a>
					</li>
					<li className={styles.listItem}>
						<a href='#'>Blog</a>
					</li>
				</ul>
			</nav>
			<div className={styles.additionals}>
				<Logo size={'small'} />
				<p>ⓒ 2024 All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Footer;
