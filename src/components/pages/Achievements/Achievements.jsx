import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Achievements.module.css';
import Blur from '../../../assets/blur/blur-achievements.png';
import useOnScreen from '../../../hooks/useOnScreen';
import classNames from 'classnames';
import { debounce } from '../../../utils/debounce';
import { useSwipeable } from 'react-swipeable';
import { assignRefs } from '../../../utils/assignRefs';
import useDetectScroll from '@smakss/react-scroll-direction';

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

const Item = ({ children, className, style, item, onClick }) => {
	const { title, content } = item;
	return (
		<div className={classNames(styles.item, className)} style={style} onClick={onClick}>
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

const Achievements = () => {
	const achievementItemsRef = useRef(null);
	const [currentItem, setCurrentItem] = useState(0);
	// const [eventScroll, setEventScroll] = useState(null);
	const { scrollDir, scrollPosition } = useDetectScroll();

	const ref = useRef();

	const titleRef = useRef();

	const scrollToNextAchievement = () => {
		setCurrentItem((prev) => (prev < achievementItemsRef.current?.children?.length - 1 ? prev + 1 : prev));
	};

	const scrollToPreviousAchievement = () => {
		setCurrentItem((prev) => (prev > 0 ? prev - 1 : prev));
	};

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			// console.log(rect);
			if (rect.y > 0) {
				scrollToPreviousAchievement();
				return;
			}
			if (rect.y < 0) {
				scrollToNextAchievement();
				return;
			}
		}

		const timeout = setTimeout(() => {
			console.log(scrollDir);
			scrollDir === 'up' && scrollToPreviousAchievement();
			scrollDir === 'down' && scrollToNextAchievement();
		}, 25);

		return () => {
			clearTimeout(timeout);
		};
	}, [scrollDir, scrollPosition]);

	useEffect(() => {
		const element = achievementItemsRef.current?.children[currentItem];

		if (element) {
			const container = achievementItemsRef.current;

			const scrollLeft = element.offsetLeft - container.offsetLeft;

			container.scrollTo({
				left: scrollLeft - 120,
				behavior: 'smooth',
			});
		}
	}, [currentItem]);

	const onSwipedRight = (event) => {
		// e.event.preventDefault();
		scrollToPreviousAchievement();
	};
	const onSwipedLeft = (event) => {
		// e.event.preventDefault();
		scrollToNextAchievement();
	};

	const onSwipedUp = (e) => {};
	const onSwipedDown = (e) => {};

	const swipeConfig = {
		onSwipedRight,
		onSwipedLeft,
		onSwipedUp,
		onSwipedDown,
		touchEventOptions: { passive: false },
		preventScrollOnSwipe: true,
		trackTouch: true,
		delta: 20,
	};

	const swipeHandlers = useSwipeable(swipeConfig);

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
		<div className={styles.container} ref={assignRefs(ref)}>
			<h1 ref={titleRef}>Statistics and Achievements</h1>
			<div
				className={styles.items}
				ref={assignRefs(achievementItemsRef, swipeHandlers.ref)}
				style={
					{
						// transform: `translateY(${currentItem * 50}px)`,
					}
				}
			>
				{items.map((item, index) => (
					<Item
						item={item}
						onClick={() => {
							setCurrentItem(index);
						}}
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
