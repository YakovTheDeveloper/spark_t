import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
import Roadmap from './Roadmap/Roadmap';
import { debounce } from '../../utils/debounce';
import { useSwipeable } from 'react-swipeable';

export const slides = [
	{
		Component: Welcome,
		slideProps: { className: styles.welcome, id: 'Welcome' },
		componentProps: {},
	},
	{
		Component: OurVision,
		slideProps: {
			id: 'OurVision',
			className: styles.OurVision,
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
	// {
	// 	Component: AboutUs,
	// 	slideProps: {
	// 		className: styles.aboutUs,
	// 		id: 'AboutUs',
	// 	},
	// 	componentProps: {},
	// },
	{
		Component: AboutUsMore,
		slideProps: {
			id: 'AboutUsMore',
			className: styles.aboutUsMore,
		},
		componentProps: {},
	},
	// {
	// 	Component: AboutUsMore,
	// 	slideProps: {
	// 		id: 'AboutUsMoreDetailed',
	// 		className: styles.aboutUsMore,
	// 	},
	// 	componentProps: {
	// 		detailed: true,
	// 	},
	// },
	{
		Component: Roadmap,
		slideProps: { className: styles.roadmap, id: 'Roadmap' },
		componentProps: {},
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

const achievementsIndex = () => slides.findIndex((s) => s.slideProps.id === 'Achievements');
const aboutUsMoreIndex = () => slides.findIndex((s) => s.slideProps.id === 'AboutUsMoreDetailed');

const Home = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const itemsRef = useRef([]);

	const scrollToNextSection = useCallback(() => {
		setCurrentSlide((prev) => {
			return prev < itemsRef.current.length - 1 ? prev + 1 : prev;
		});
	});

	const scrollToPreviousSection = useCallback(() => {
		setCurrentSlide((prev) => {
			return prev > 0 ? prev - 1 : prev;
		});
	});

	const scrollSlide = (dir) => (dir === 'next' ? scrollToNextSection() : scrollToPreviousSection());

	// useEffect(() => {
	// 	if (itemsRef.current.length > 0) {
	// 		const slide = itemsRef.current[currentSlide];
	// 		slide.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
	// 	}
	// }, [currentSlide]);

	// const handler = useCallback(
	// 	(event) => {
	// 		event.deltaY > 0 ? scrollSlide('next') : scrollSlide('prev');
	// 	},
	// 	[currentSlide],
	// );

	// const debouncedHandler = useRef(debounce(handler, 100)).current;

	// useEffect(() => {
	// 	const listener = (event) => {
	// 		event.preventDefault();
	// 		debouncedHandler(event);
	// 	};

	// 	if (currentSlide === achievementsIndex() || currentSlide === aboutUsMoreIndex()) {
	// 		return () => {
	// 			window.removeEventListener('wheel', listener);
	// 		};
	// 	}

	// 	window.addEventListener('wheel', listener, { passive: false });

	// 	return () => {
	// 		window.removeEventListener('wheel', listener);
	// 	};
	// }, [debouncedHandler, currentSlide, handler, scrollSlide]);

	const Slides = useMemo(
		() =>
			slides.map(({ Component, componentProps, slideProps }, index) => (
				<Slide
					key={slideProps.id}
					{...slideProps}
					ref={(el) => (itemsRef.current[index] = el)}
					scrollToNextSection={scrollToNextSection}
					scrollToPreviousSection={scrollToPreviousSection}
				>
					<Component
						{...componentProps}
						scrollToNextSection={scrollToNextSection}
						scrollToPreviousSection={scrollToPreviousSection}
					/>
				</Slide>
			)),
		[],
	);

	const handleSwipedUp = () => {
		scrollToNextSection();
	};

	const handleSwipedDown = () => {
		scrollToPreviousSection();
	};

	// const swipeConfig = {
	// 	onSwipedUp: handleSwipedUp,
	// 	onSwipedDown: handleSwipedDown,
	// 	touchEventOptions: { passive: false },
	// 	preventScrollOnSwipe: true,
	// 	trackTouch: true,
	// 	delta: 1,
	// };

	// const swipeHandlers = useSwipeable(swipeConfig);

	return (
		<>
			<Header currentSlide={slides[currentSlide]} setCurrentSlide={setCurrentSlide} />
			<main>
				{Slides}
				{/* {slides.map(({ Component, componentProps, slideProps }, index) => (
					<Slide key={index} {...slideProps} ref={(el) => (itemsRef.current[index] = el)}>
						<Component
							{...componentProps}
							scrollToNextSection={scrollToNextSection}
							scrollToPreviousSection={scrollToPreviousSection}
						/>
					</Slide>
				))} */}
			</main>
		</>
	);
};

export default Home;
