import React, { useEffect, useRef, useState } from 'react';
import styles from './Achievements.module.css';
import Blur from '../../../assets/blur/blur-achievements.png';
import useOnScreen from '../../../hooks/useOnScreen';
import classNames from 'classnames';

const items = [
	{
		title: '$5M Paid to Solana Validators',
		content: 'Over the course of our operations, we have paid Solana validators more than $5 million.',
	},
	{
		title: '5+ MEV Strategies',
		content: 'We employ over five different MEV strategies to maximize efficiency and returns.',
	},
	{
		title: '150+ Connected Validators',
		content: 'Join the growing network of over 150 connected validators.',
	},
	{
		title: '75+ Searchers',
		content: 'Be part of the community with more than 75 active searchers.',
	},
	{
		title: '4+ Years in MEV Market',
		content: 'Leverage our extensive experience in the MEV market.',
	},
];

const Item = ({ children, className, style, item }) => {
	const { title, content } = item;
	return (
		<div className={classNames(styles.item, className)} style={style}>
			<h2>{title}</h2>
			<p>{content}</p>
			{children}
		</div>
	);
};

function useFirstRender() {
	const firstRender = useRef(true);
	useEffect(() => {
		firstRender.current = false;
	}, []);
	return firstRender.current;
}

const Achievements = ({ scrollToPreviousSection, scrollToNextSection }) => {
	const achievementItemsRef = useRef(null);
	const [currentItem, setCurrentItem] = useState(0);
	const [eventScroll, setEventScroll] = useState(null);
	const ref = useRef();
	const titleRef = useRef();
	const firstRender = useFirstRender();
	// const shouldScrollNext = (curr) => curr < achievementItemsRef.current?.children?.length - 1;
	// const shouldScrollPrev = (curr) => curr > 0;

	const scrollToNextAchievement = () => {
		setCurrentItem((prev) => (prev < achievementItemsRef.current?.children?.length - 1 ? prev + 1 : prev));
	};

	const scrollToPreviousAchievement = () => {
		setCurrentItem((prev) => (prev > 0 ? prev - 1 : prev));
	};

	const scrollItems = (dir) => {
		return dir === 'next' ? scrollToNextAchievement() : scrollToPreviousAchievement();
	};

	useEffect(() => {
		const isFirstElement = currentItem === 0;
		const isLastElement = currentItem === achievementItemsRef.current?.children.length - 1;

		const handler = (event) => {
			event.preventDefault();

			const parent = ref.current;
			const child = event.srcElement;
			const isCurrentSlideScroll = parent.contains(child);
			if (!isCurrentSlideScroll) return;

			const forwardScroll = event.deltaY > 0;
			const backScroll = event.deltaY < 0;

			if (isLastElement && forwardScroll) {
				scrollToNextSection();
				return;
			}
			if (isFirstElement && backScroll) {
				scrollToPreviousSection();
				return;
			}

			setEventScroll(event);
		};

		window.addEventListener('wheel', handler, { passive: false });

		return () => {
			window.removeEventListener('wheel', handler);
		};
	}, [currentItem]);

	useEffect(() => {
		console.log('firstRender', firstRender);

		const timeout = setTimeout(() => {
			eventScroll.deltaY > 0 ? scrollItems('next') : scrollItems('prev');
		}, 200);

		return () => clearTimeout(timeout);
	}, [eventScroll, firstRender]);

	useEffect(() => {
		if (firstRender) {
			return;
		}

		const timeout = setTimeout(() => {
			if (achievementItemsRef.current?.children.length > 0) {
				const slide = achievementItemsRef.current?.children[currentItem];
				slide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
			}
		}, 150);
		return () => clearTimeout(timeout);
	}, [currentItem]);

	const opacity = (index) => {
		if (index === currentItem) {
			return 1.0;
		} else if (index === currentItem - 1 || index === currentItem + 1) {
			return 0.5;
		} else {
			return 0.25;
		}
	};

	return (
		<div className={styles.container} ref={ref}>
			<h1 ref={titleRef}>Statistics and Achievements</h1>
			<div className={styles.items} ref={achievementItemsRef}>
				{items.map((item, index) => (
					<Item
						item={item}
						className={index === currentItem && styles.itemSelected}
						style={{
							opacity: opacity(index),
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default React.memo(Achievements);
