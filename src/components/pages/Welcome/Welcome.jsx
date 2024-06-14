import React, { useEffect, useRef, useState } from 'react';
import styles from './Welcome.module.css';
import Blur2 from '../../../assets/blur/blur2.png';
import Blur from '../../../assets/blur/blur1.png';
import classNames from 'classnames';
import Logo from '../../../assets/icons/logo-welcome.svg?react';
import LogoSmall from '../../../assets/icons/logo.svg?react';
import useOnScreen from '../../../hooks/useOnScreen';
import { useDataStore } from '../../../../store';
import useDetectScroll from '@smakss/react-scroll-direction';

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
				className={styles.logo}
			/>
			<div className={classNames(styles.brandContainer)}>
				<p className={styles.brand}>spark-t</p>
			</div>
		</div>
	</div>
);

const Inner = ({ transition }) => {
	return (
		<div className={styles.inner}>
			<div className={styles.brandContainer}>
				<h1>Welcome to</h1>
			</div>
			<Logo className={styles.logo} style={transition} />
			<div className={classNames(styles.brandContainer, styles.brandContainerDesktop)}>
				<p className={styles.brand}>spark-t</p>
			</div>
		</div>
	);
};

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

	const { scrollPosition } = useDetectScroll();

	const [transition, setTransition] = useState({});
	// console.log(`r
	//     curr ${currentScroll},
	//     centerPos ${centerPos},
	//     elementHeight ${elementHeight},
	//     `);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			console.log(rect);
			const elementHeight = rect.height;
			const centerPos = elementHeight / 2;
			const centerPosThird = elementHeight / 3;
			const centerPosFourth = elementHeight / 4;
			const currentScroll = scrollPosition.top;

			if (currentScroll === 0) {
				setTransition({
					transform: `scale(1)`,
				});
				setIsWelcomeScreen(true);
				return;
			}
			if (currentScroll > 0 && currentScroll <= centerPosFourth) {
				setTransition({
					transform: `scale(0.8)`,
				});
				setIsWelcomeScreen(true);
				return;
			}
			if (currentScroll > 0 && currentScroll <= centerPosThird) {
				setTransition({
					transform: `scale(0.65)`,
				});
				setIsWelcomeScreen(true);
				return;
			}
			if (currentScroll > 0 && currentScroll <= centerPos) {
				setTransition({
					transform: `scale(0.5)`,
					top: '0',
				});
				setIsWelcomeScreen(true);
				return;
			}
			if (currentScroll > 0 && currentScroll <= centerPos + 70) {
				setTransition({
					transform: `scale(0.3) translate(-150px, 560px)`,
					opacity: 0,
				});
				setIsWelcomeScreen(false);
				return;
			}
		}
	}, [scrollPosition]);

	return (
		<div className={styles.container} ref={ref}>
			<Inner transition={transition} />
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
