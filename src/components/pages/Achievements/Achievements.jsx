import React, { useEffect, useRef, useState } from 'react';
import styles from './Achievements.module.css';
import Blur from '../../../assets/blur/blur-achievements.png';
import useOnScreen from '../../../hooks/useOnScreen';

const Item = ({ children }) => {
	return (
		<div className={styles.item}>
			<h2>$5M Paid to Solana Validators</h2>
			<p>Over the course of our operations, we have paid Solana validators more than $5 million.</p>
			{children}
		</div>
	);
};

const Achievements = ({ setScrollable }) => {
	const achievementItemsRef = useRef(null);
	const [currentItem, setCurrentItem] = useState(0);
	const [eventScroll, setEventScroll] = useState(null);

	const ref = useRef();
	const titleRef = useRef();
	const isVisible = useOnScreen(titleRef);

	// console.log('isVisible', isVisible);
	console.log('currentItem', currentItem);

	useEffect(() => {
		if (currentItem === achievementItemsRef.current?.children.length - 1) {
			setScrollable(true);
			return;
		}
		const timeout = setTimeout(() => {
			setScrollable(!isVisible);
		}, 100);

		return () => clearTimeout(timeout);
	}, [isVisible, currentItem]);

	const scrollToNextSection = () => {
		setCurrentItem((prev) => (prev < achievementItemsRef.current?.children?.length - 1 ? prev + 1 : prev));
	};

	const scrollToPreviousSection = () => {
		setCurrentItem((prev) => (prev > 0 ? prev - 1 : prev));
	};

	useEffect(() => {
		const handler = (event) => {
			event.preventDefault();
			if (currentItem === achievementItemsRef.current?.children.length - 1) {
				setScrollable(true);
				return;
			}
			setEventScroll(event);
			return;
		};

		window.addEventListener('wheel', handler, { passive: false });

		return () => {
			window.removeEventListener('wheel', handler);
		};
	}, [currentItem]);

	useEffect(() => {
		if (!isVisible) return;
		const timeout = setTimeout(() => {
			if (eventScroll.deltaY > 0) {
				scrollToNextSection();
				return;
			} else {
				// scrollToPreviousSection();
			}
		}, 200);

		return () => clearTimeout(timeout);
	}, [eventScroll, isVisible]);

	useEffect(() => {
		if (!isVisible) return;
		if (achievementItemsRef.current?.children.length > 0) {
			const slide = achievementItemsRef.current?.children[currentItem];
			console.log('slide', slide);
			slide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
		}
	}, [currentItem, isVisible]);

	// console.log('isVisible', isVisible);

	return (
		<div className={styles.container} ref={ref}>
			<h1 ref={titleRef}>Statistics and Achievements</h1>
			<div className={styles.items} ref={achievementItemsRef}>
				{[1, 2, 3, 4, 5].map((item, index) => (
					<Item>{index === currentItem && <img src={Blur} alt='background' className={styles.blur} />}</Item>
				))}
			</div>
		</div>
	);
};

export default Achievements;
