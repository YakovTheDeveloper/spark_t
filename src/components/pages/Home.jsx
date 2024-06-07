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
import Footer from './Footer/Footer';

const slides = [
	{
		Component: Welcome,
		slideProps: { className: styles.welcome, id: 'Welcome' },
		componentProps: {},
	},
	{
		Component: OurVision,
		slideProps: {
			id: 'OurVision',
		},
		componentProps: {},
	},
	{
		Component: KeyFeatures,
		slideProps: {
			id: 'KeyFeatures',
		},
		componentProps: {},
	},
	{
		Component: AboutUs,
		slideProps: {
			className: styles.aboutUs,
			id: 'AboutUs',
		},
		componentProps: {},
	},
	{
		Component: AboutUsMore,
		slideProps: {
			id: 'AboutUsMore',
			className: styles.aboutUsMore,
		},
		componentProps: {},
	},
	{
		Component: AboutUsMore,
		slideProps: {
			id: 'AboutUsMore',
		},
		componentProps: { selectedLink: 1 },
	},
	{
		Component: AboutUsMore,
		slideProps: {
			id: 'AboutUsMore',
		},
		componentProps: { selectedLink: 2 },
	},
	{
		Component: AboutUsMore,
		slideProps: {
			id: 'AboutUsMore',
		},
		componentProps: { selectedLink: 3 },
	},
	{
		Component: AdminPanel,
		slideProps: { className: styles.adminPanel, id: 'AdminPanel' },
		componentProps: {},
	},
	{
		Component: Documentation,
		slideProps: { className: styles.docs, id: 'Documentation' },
		componentProps: {},
	},
	{
		Component: Registration,
		slideProps: { className: styles.reg, id: 'Registration' },
		componentProps: {},
	},
	{
		Component: Achievements,
		slideProps: { id: 'Achievements' },
		componentProps: {},
	},
	{
		Component: Profit,
		slideProps: { className: styles.profit, id: 'Profit' },
		componentProps: {},
	},
	{
		Component: Footer,
		slideProps: { id: 'Footer' },
		componentProps: {},
	},
];

const Home = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const itemsRef = useRef([]);

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
		if (currentSlide === 11) return;
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
		}, 250);

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
			<Header currentSlide={slides[currentSlide]} />
			<main>
				{slides.map(({ Component, componentProps, slideProps }, index) => (
					<Slide key={index} {...slideProps} ref={(el) => (itemsRef.current[index] = el)}>
						<Component
							{...componentProps}
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
