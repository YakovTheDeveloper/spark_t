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
import Profit from './Profit/Profit';
import Header from '../header/Header';

const slides = [
	// {
	// 	Component: Welcome,
	// 	slideProps: { className: styles.welcome },
	// 	componentProps: {},
	// },
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
	// 	slideProps: {
	// 		className: styles.aboutUs,
	// 	},
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
	{
		Component: Registration,
		slideProps: { className: styles.reg },
		componentProps: {},
	},
	{
		Component: Achievements,
		slideProps: {},
		componentProps: {},
	},
	{
		Component: Profit,
		slideProps: { className: styles.profit },
		componentProps: {},
	},
];

// function isInViewport(yourElement, offset = 0) {
// 	if (!yourElement) return false;
// 	const top = yourElement.getBoundingClientRect().top;
// 	const result = top + offset >= 0 && top - offset <= window.innerHeight;
// 	console.log('result', result);
// 	return top + offset >= 0 && top - offset <= window.innerHeight;
// }

const Home = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const itemsRef = useRef([]);
	const [scrollable, setScrollable] = useState(true);

	const [eventScroll, setEventScroll] = useState(null);

	const scrollToNextSection = () => {
		setCurrentSlide((prev) => {
			return prev < itemsRef.current.length - 1 ? prev + 1 : prev;
		});
	};

	const scrollToPreviousSection = () => {
		setCurrentSlide((prev) => {
			return prev > 0 ? prev - 1 : prev;
		});
	};

	const scrollSlide = (dir) => {
		if (currentSlide === 1) return;
		return dir === 'next' ? scrollToNextSection() : scrollToPreviousSection();
	};

	useEffect(() => {
		const handler = (event) => {
			event.preventDefault();
			setEventScroll(event);
			return;
		};
		window.addEventListener('wheel', handler, { passive: false });

		return () => {
			window.removeEventListener('wheel', handler);
		};
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			eventScroll.deltaY > 0 ? scrollSlide('next') : scrollSlide('prev');
		}, 150);

		return () => clearTimeout(timeout);
	}, [eventScroll]);

	useEffect(() => {
		console.log('currentSlide', currentSlide);
		if (itemsRef.current.length > 0) {
			const slide = itemsRef.current[currentSlide];
			slide.scrollIntoView({ behavior: 'smooth' });
		}
	}, [currentSlide]);

	return (
		<>
			<Header currentSlide={currentSlide} />
			<main>
				{slides.map(({ Component, componentProps, slideProps }, index) => (
					<Slide key={index} {...slideProps} ref={(el) => (itemsRef.current[index] = el)}>
						<Component
							{...componentProps}
							setScrollable={setScrollable}
							scrollToNextSection={scrollToNextSection}
							scrollToPreviousSection={scrollToPreviousSection}
						/>
					</Slide>
				))}
			</main>
		</>
	);
};

export default Home;
