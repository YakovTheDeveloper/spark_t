import React, { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import Slide from '../ui/Slide/Slide';
import AboutUsMore from './AboutUsMore/AboutUsMore';
import AdminPanel from './AdminPanel/AdminPanel';
import OurVision from './OurVision/OurVision';
import KeyFeatures from './KeyFeatures/KeyFeatures';
import Welcome from './Welcome/Welcome';
import AboutUs from './AboutUs/AboutUs';
import Documentation from './Documentation/Documentation';
import Registration from './Registration/Registration';
import Achievements from './Achievements/Achievements';
import useOnScreen from '../../hooks/useOnScreen';

const slides = [
	{
		Component: Welcome,
		slideProps: {},
		componentProps: {},
	},
	// {
	// 	Component: OurVision,
	// 	slideProps: {},
	// 	componentProps: {},
	// },
	// {
	// 	Component: KeyFeatures,
	// 	slideProps: {},
	// 	componentProps: {},
	// },
	// {
	// 	Component: AboutUs,
	// 	slideProps: {},
	// 	componentProps: {},
	// },
	// {
	// 	Component: AboutUsMore,
	// 	slideProps: {},
	// 	componentProps: {},
	// },
	// {
	// 	Component: AboutUsMore,
	// 	slideProps: {},
	// 	componentProps: { selectedLink: 1 },
	// },
	// {
	// 	Component: AboutUsMore,
	// 	slideProps: {},
	// 	componentProps: { selectedLink: 2 },
	// },
	// {
	// 	Component: AboutUsMore,
	// 	slideProps: {},
	// 	componentProps: { selectedLink: 3 },
	// },
	// {
	// 	Component: AdminPanel,
	// 	slideProps: { className: styles.adminPanel },
	// 	componentProps: {},
	// },
	// {
	// 	Component: Documentation,
	// 	slideProps: { className: styles.docs },
	// 	componentProps: {},
	// },
	// {
	// 	Component: Registration,
	// 	slideProps: { className: styles.reg },
	// 	componentProps: {},
	// },
	{
		Component: Achievements,
		slideProps: {},
		componentProps: {},
	},
	{
		Component: Registration,
		slideProps: { className: styles.reg },
		componentProps: {},
	},
];

function isInViewport(yourElement, offset = 0) {
	if (!yourElement) return false;
	const top = yourElement.getBoundingClientRect().top;
	const result = top + offset >= 0 && top - offset <= window.innerHeight;
	console.log('result', result);
	return top + offset >= 0 && top - offset <= window.innerHeight;
}

const Home = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const itemsRef = useRef([]);
	const [scrollable, setScrollable] = useState(true);

	const [eventScroll, setEventScroll] = useState(null);

	const scrollToNextSection = () => {
		setCurrentSlide((prev) => (prev < itemsRef.current.length - 1 ? prev + 1 : prev));
	};

	const scrollToPreviousSection = () => {
		setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
	};

	useEffect(() => {
		console.log('scrollable', scrollable);
		const handler = (event) => {
			if (!scrollable) {
				event.preventDefault();
				return;
			}
			event.preventDefault();
			setEventScroll(event);
			return;
		};
		window.addEventListener('wheel', handler, { passive: false });

		return () => {
			window.removeEventListener('wheel', handler);
		};
	}, [scrollable]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (eventScroll.deltaY > 0) {
				scrollToNextSection();
			} else {
				scrollToPreviousSection();
			}
		}, 150);

		return () => clearTimeout(timeout);
	}, [eventScroll]);

	useEffect(() => {
		if (itemsRef.current.length > 0) {
			const slide = itemsRef.current[currentSlide];
			slide.scrollIntoView({ behavior: 'smooth' });
		}
	}, [currentSlide]);

	return (
		<>
			{slides.map(({ Component, componentProps, slideProps }, index) => (
				<Slide key={index} {...slideProps} ref={(el) => (itemsRef.current[index] = el)}>
					<Component {...componentProps} setScrollable={setScrollable} />
				</Slide>
			))}
		</>
	);
};

export default Home;
