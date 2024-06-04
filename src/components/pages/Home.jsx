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

const slides = [
	{
		Component: Welcome,
		props: {},
	},
	{
		Component: OurVision,
		props: {},
	},
	{
		Component: KeyFeatures,
		props: {},
	},
	{
		Component: AboutUs,
		props: {},
	},
	{
		Component: AboutUsMore,
		props: {},
	},
	{
		Component: AboutUsMore,
		props: { selectedLink: 1 },
	},
	{
		Component: AboutUsMore,
		props: { selectedLink: 2 },
	},
	{
		Component: AboutUsMore,
		props: { selectedLink: 3 },
	},
	{
		Component: AdminPanel,
		props: { className: styles.adminPanel },
	},
	{
		Component: Documentation,
		props: { className: styles.docs },
	},
	{
		Component: Registration,
		props: { className: styles.reg },
	},
	{
		Component: Achievements,
		props: {},
	},
];

const Home = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const itemsRef = useRef([]);

	const scrollToNextSection = () => {
		setCurrentSlide((prev) => (prev < itemsRef.current.length - 1 ? prev + 1 : prev));
	};

	const scrollToPreviousSection = () => {
		setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
	};
	console.log('currentSlide', currentSlide);
	useEffect(() => {
		const handler = (event) => {
			event.preventDefault();
			if (event.deltaY > 0) {
				scrollToNextSection();
			} else {
				scrollToPreviousSection();
			}
		};
		window.addEventListener('wheel', handler, { passive: false });

		return () => {
			window.removeEventListener('wheel', handler);
		};
	}, []);

	useEffect(() => {
		if (itemsRef.current.length > 0) {
			const slide = itemsRef.current[currentSlide];
			slide.scrollIntoView({ behavior: 'smooth' });
		}
	}, [currentSlide]);

	return (
		<>
			{slides.map(({ Component, props }, index) => (
				<Slide key={index} {...props} ref={(el) => (itemsRef.current[index] = el)}>
					<Component />
				</Slide>
			))}
		</>
	);
};

const Home2 = () => {
	const itemsRef = useRef([]);
	const [currentSlide, setCurrentSlide] = useState(1);

	function scrollToNextSection() {
		setCurrentSlide((prev) => {
			if (prev === slides.length) return prev;
			return prev + 1;
		});
	}

	function scrollToPreviousSection() {
		setCurrentSlide((prev) => {
			if (prev === 1) return prev;
			return prev - 1;
		});
	}

	useEffect(() => {
		const handler = (event) => {
			if (event.deltaY > 0) {
				scrollToNextSection();
			} else {
				scrollToPreviousSection();
			}
		};
		document.addEventListener('wheel', handler);

		return () => {
			document.removeEventListener('wheel', handler);
		};
	}, []);

	useEffect(() => {
		if (itemsRef.current.length === 0) return;

		const slide = itemsRef.current[currentSlide - 1];
		console.log('slide to scroll', slide);
		console.log('currentSlide', currentSlide);
		slide.scrollIntoView({ behavior: 'smooth' });
	}, [currentSlide]);

	return (
		<>
			{slides.map(({ Component, props }, index) => (
				<Slide key={index} {...props} ref={(el) => (itemsRef.current[index] = el)}>
					<Component />
				</Slide>
			))}
		</>
		// <>
		// 	<Slide>
		// 		<Welcome />
		// 	</Slide>
		// 	<Slide>
		// 		<OurVision />
		// 	</Slide>
		// 	<Slide>
		// 		<KeyFeatures />
		// 	</Slide>
		// 	<Slide>
		// 		<AboutUs />
		// 	</Slide>
		// 	<Slide>
		// 		<AboutUsMore />
		// 	</Slide>
		// 	<Slide>
		// 		<AboutUsMore selectedLink={1} />
		// 	</Slide>
		// 	<Slide>
		// 		<AboutUsMore selectedLink={2} />
		// 	</Slide>
		// 	<Slide>
		// 		<AboutUsMore selectedLink={3} />
		// 	</Slide>
		// 	<Slide className={styles.adminPanel}>
		// 		<AdminPanel />
		// 	</Slide>
		// 	<Slide className={styles.docs}>
		// 		<Documentation />
		// 	</Slide>
		// 	<Slide className={styles.reg}>
		// 		<Registration />
		// 	</Slide>
		// 	<Slide>
		// 		<Achievements />
		// 	</Slide>
		// </>
	);
};

export default Home;
