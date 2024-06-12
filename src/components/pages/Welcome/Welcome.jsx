import React, { useEffect, useRef } from 'react';
import styles from './Welcome.module.css';
import Blur2 from '../../../assets/blur/blur2.png';
import Blur from '../../../assets/blur/blur1.png';
import classNames from 'classnames';
import Logo from '../../../assets/icons/logo-welcome.svg?react';
import LogoSmall from '../../../assets/icons/logo.svg?react';
import useOnScreen from '../../../hooks/useOnScreen';
import { useDataStore } from '../../../../store';

const InnerMobile = () => (
	<div className={classNames(styles.inner, styles.mobile)}>
		<div className={styles.brandContainer}>
			<h1>Welcome to</h1>
		</div>
		<div className={styles.brandContainer}>
			<LogoSmall
				style={{
					width: '80px',
					height: '80px',
				}}
			/>
			<div className={classNames(styles.brandContainer)}>
				<p className={styles.brand}>spark-t</p>
			</div>
		</div>
	</div>
);

const Inner = () => (
	<div className={styles.inner}>
		<div className={styles.brandContainer}>
			<h1>Welcome to</h1>
		</div>
		<Logo />
		<div className={classNames(styles.brandContainer, styles.brandContainerDesktop)}>
			<p className={styles.brand}>spark-t</p>
		</div>
	</div>
);

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.3,
};

const Welcome = () => {
	const ref = useRef();
	const onScreen = useOnScreen(ref, options);

	const setIsWelcomeScreen = useDataStore((s) => s.setIsWelcomeScreen);

	useEffect(() => {
		setIsWelcomeScreen(onScreen);
	}, [onScreen]);

	return (
		<div className={styles.container} ref={ref}>
			<Inner />
			<InnerMobile />

			<div className={styles.bottom}>
				<p className={styles.info}>
					Empowering Validators on Solana with <span>Spark-T MEV Infrastructure</span>
				</p>
			</div>
		</div>
	);
};

export default Welcome;
