import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './AboutUsMore.module.css';
import Video from '../../../assets/video/aboutUs.mp4';
import classNames from 'classnames';
import { useSwipeable } from 'react-swipeable';
import { assignRefs } from '../../../utils/assignRefs';
import { debounce } from '../../../utils/debounce';
import useOnScreen from '../../../hooks/useOnScreen';

const text = {
	1: `After you update the validator software (just like connecting Jito), our MEV 
    system will start working on your slots. We will share the profits with you through 
    daily payouts. You can monitor all the details using the admin panel.`,
	2: `We have analyzed our competitors including jtio and found that our payout is significantly higher than others. The reasons for this are that we give more revenue to our validators, and our MEV is more communal and accurate.`,
	3: `Our relation manager will contact you and provide exact instructions on connection and will follow you around until you're completely through the process.
    You will have to update software of your validator (just like if you were connecting to jito). `,
};
const titles = ['How does it work?', 'Spark-T advantages', 'How to connect to Spark-T?'];

const AboutUsMore = ({ detailed, scrollToNextSection, scrollToPreviousSection }) => {
	const [step, setStep] = useState(0);

	const ref = useRef(null);
	const videoRef = useRef(null);

	const getLinkStyle = (linkPosition) => {
		if (!detailed) return styles.link;
		return step + 1 === linkPosition ? styles.selectedLink : styles.unselectedLink;
	};

	const nextStep = useCallback(() => {
		setStep((prev) => {
			return prev < 3 ? prev + 1 : prev;
		});
	});

	const prevStep = useCallback(() => {
		setStep((prev) => {
			return prev > 1 ? prev - 1 : prev;
		});
	});

	const [translate, setTranslate] = useState(0);

	const scrollHandler = (event, stepp) => {
		// console.log('from fucntion', stepp);
		// console.log('from use state', step);
		const scrollDown = event.deltaY > 0;
		// console.log('scrollDown', scrollDown);

		// if (step === 0 && scrollUp) {
		// 	scrollToPreviousSection();
		// 	return;
		// }

		// if (step === 2 && scrollDown) {
		// 	scrollToNextSection();
		// 	return;
		// }
		scrollDown ? nextStep() : prevStep();
	};

	// const swipeHandler = (direction) => {
	// 	if (!detailed) return;

	// 	if (step === 0 && direction === 'down') {
	// 		scrollToPreviousSection();
	// 		return;
	// 	}

	// 	if (step === 2 && direction === 'up') {
	// 		scrollToNextSection();
	// 		return;
	// 	}
	// 	direction === 'up' ? nextStep() : prevStep();

	const lastRef = useRef();

	const intersect = useOnScreen(ref, {
		threshold: 0.6,
	});

	const intersect2 = useOnScreen(lastRef, {
		threshold: 0,
	});

	useEffect(() => {
		const handler = (event) => {
			if (intersect2) return;
			const scrollDown = event.deltaY > 0;
			const scrollUp = event.deltaY < 0;

			if (translate <= 400) {
				setTranslate((prev) => {
					if (prev <= 0 && scrollUp) return prev;
					if (prev >= 400 && scrollDown) return prev;
					return prev + parseInt(event.deltaY) * 1;
				});
			}
		};
		if (!intersect) return () => document.removeEventListener('wheel', handler);

		document.addEventListener('wheel', handler);

		return () => document.removeEventListener('wheel', handler);
	}, [intersect, intersect2]);

	console.log('intersect', intersect);
	// };
	const debouncedHandler = useRef(debounce(scrollHandler, 200)).current;

	const handleIntersection = (entries, observer) => {
		entries.map((entry) => {
			console.log(entry);
		});
	};

	useEffect(() => {
		intersect2 && setStep(1);
	}, [intersect2]);

	useEffect(() => {
		const handler = (event) => {
			const scrollDown = event.deltaY > 0;
			const scrollUp = event.deltaY < 0;

			// if (step === 1 && scrollUp) {
			// 	event.preventDefault();
			// }
			scrollDown && nextStep();
			scrollUp && prevStep();
		};

		if (step > 0) {
			ref.current?.addEventListener('wheel', handler, { passive: false });
		}
		return () => ref.current?.removeEventListener('wheel', handler);
	}, [step]);

	const titleStyle2 = {
		transform: `translateY(${translate}px)`,
		fontSize: translate <= 0 ? '60px' : `${10000 / translate}px`,
	};

	return (
		<>
			<div className={classNames(styles.container, step === 0 && styles.background)} ref={assignRefs(ref)}>
				<h1 style={titleStyle2} className={styles.titleContainer}>
					About Us
				</h1>
				<p
					className={styles.aboutStepOneText}
					style={{
						opacity: translate === 0 ? 1 : 0,
					}}
				>
					Since 2020, our team has been a leading searcher in the Ethereum ecosystem. With the launch of MEV on
					Solana, we have expanded our infrastructure to support and enhance the Solana network, leveraging our
					expertise to benefit both - validators and searchers.
				</p>
				{/* <div className={styles.aboutStepOne}>
					<div className={styles.titleContainer} style={titleStyle}>
						<h1>About Us</h1>
					</div>
					<p
						className={styles.aboutStepOneText}
						style={{
							opacity: translate === 0 ? 1 : 0,
						}}
					>
						Since 2020, our team has been a leading searcher in the Ethereum ecosystem. With the launch of MEV on
						Solana, we have expanded our infrastructure to support and enhance the Solana network, leveraging our
						expertise to benefit both - validators and searchers
					</p>
				</div> */}
				{step !== 0 && <p className={styles.info}>{text[step]}</p>}
				<div className={styles.links}>
					{/* <p className={styles.about}>about us</p> */}
					<p>
						{titles.map((title, index) => (
							<h2 onClick={() => setStep(index + 1)} ref={index === 2 ? lastRef : null}>
								<p
									className={classNames(
										styles.aboutItem,
										styles.link,
										step ? (step === index + 1 ? styles.selectedLink : styles.unselected) : null,
									)}
								>
									{title}
								</p>
							</h2>
						))}
					</p>
				</div>
			</div>
			{step > 0 && (
				<div className={styles.videoContainer}>
					<video className={styles.video} autoPlay loop muted ref={videoRef}>
						<source src={Video} type='video/mp4' />
					</video>
				</div>
			)}
		</>
	);
};

export default AboutUsMore;

// const titleStyle2 = {
//     transform: `translateY(${translate}px)`,
//     fontSize: translate <= 0 ? '60px' : `${10000 / translate}px`,
// };

// const onVisible = () => {
// 	console.log('onVisible');
// 	setTranslate((prev) => {
// 		if (prev <= 0 && scrollUp) return prev;
// 		if (prev >= 400 && scrollDown) return prev;
// 		return prev + parseInt(event.deltaY);
// 	});
// };

// useEffect(() => {
// 	if (!ref.current) return;

// 	const observer = new IntersectionObserver(
// 		(entries) => {
// 			entries.forEach((entry) => {
// 				if (entry.intersectionRatio >= 0.6) {
// 					onVisible();
// 				}
// 			});
// 		},
// 		{
// 			threshold: 0.6, // Trigger the callback when 40% of the height is visible
// 		},
// 	);

// 	if (ref.current) {
// 		observer.observe(ref.current);
// 	}

// 	return () => {
// 		if (ref.current) {
// 			observer.unobserve(ref.current);
// 		}
// 	};
// }, [onVisible]);

// useEffect(() => {
// 	// console.log(step);

// 	const handler = (event) => {
// 		const scrollDown = event.deltaY > 0;
// 		const scrollUp = event.deltaY < 0;
// 		console.log('translate', translate);

// 		const container = ref.current;
// 		const end = container.scrollTop + container.clientHeight >= container.scrollHeight;
// 		setTranslate((prev) => {
// 			// console.log('prev', prev);
// 			if (prev <= 0 && scrollUp) return prev;
// 			if (prev >= 400 && scrollDown) return prev;
// 			return prev + parseInt(event.deltaY);
// 		});

// 		if (translate !== 400) {
// 			return;
// 		}

// 		scrollHandler(event, step);
// 	};

// 	if (videoRef.current) videoRef.current.currentTime = 0;

// 	ref.current?.addEventListener('wheel', handler);

// 	return () => ref.current?.removeEventListener('wheel', handler);
// }, [step, debouncedHandler, scrollHandler]);
