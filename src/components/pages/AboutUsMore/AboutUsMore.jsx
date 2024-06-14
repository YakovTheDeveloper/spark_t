import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './AboutUsMore.module.css';
import Video from '../../../assets/video/aboutUs.mp4';
import classNames from 'classnames';
import { useSwipeable } from 'react-swipeable';
import { assignRefs } from '../../../utils/assignRefs';
import { debounce } from '../../../utils/debounce';
import useOnScreen from '../../../hooks/useOnScreen';
import useDetectScroll from '@smakss/react-scroll-direction';

const text = {
	2: `After you update the validator software (just like connecting Jito), our MEV 
    system will start working on your slots. We will share the profits with you through 
    daily payouts. You can monitor all the details using the admin panel.`,
	3: `We have analyzed our competitors including jtio and found that our payout is significantly higher than others. The reasons for this are that we give more revenue to our validators, and our MEV is more communal and accurate.`,
	4: `Our relation manager will contact you and provide exact instructions on connection and will follow you around until you're completely through the process.
    You will have to update software of your validator (just like if you were connecting to jito). `,
};
const titles = ['How does it work?', 'Spark-T advantages', 'How to connect to Spark-T?'];

const AboutUsMore = () => {
	const [step, setStep] = useState(0);
	const { scrollDir, scrollPosition } = useDetectScroll();

	const ref = useRef(null);
	const videoRef = useRef(null);

	const nextStep = useCallback(() => {
		setStep((prev) => {
			return prev < 4 ? prev + 1 : prev;
		});
	});

	const prevStep = useCallback(() => {
		setStep((prev) => {
			return prev > 0 ? prev - 1 : prev;
		});
	});

	// useEffect(() => {
	// 	if (ref.current) {
	// 		const rect = ref.current?.getBoundingClientRect();
	// 		const startY = scrollPosition.top + rect.top;
	// 		const endY = scrollPosition.top + rect.top + rect.height;
	// 		const currentScroll = scrollPosition.top + window.innerHeight / 2; // middle of the viewport
	// 				console.log(`
	// 		${rect},
	// 		${startY},
	// 		${endY},
	// 		${currentScroll},
	// 		`);
	// 		const block2Height = endY - startY;
	// 		const twentyPercent = startY + block2Height * 0.2;
	// 		const fortyPercent = startY + block2Height * 0.4;
	// 		console.log(`
	//             ${block2Height},
	//             ${twentyPercent},
	//             ${fortyPercent},
	//             `);
	// 		if (currentScroll >= twentyPercent && currentScroll < fortyPercent) {
	// 			console.log('step 0');
	// 		} else if (currentScroll >= fortyPercent) {
	// 			console.log('step 1');
	// 		}
	// 	}
	// }, [scrollPosition]);
	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			// console.log(rect);
			if (rect.y > 0) {
				prevStep();
				return;
			}
			if (rect.y < 0) {
				nextStep();
				return;
			}
		}

		const timeout = setTimeout(() => {
			scrollDir === 'up' && prevStep();
			scrollDir === 'down' && nextStep();
		}, 35);

		return () => {
			clearTimeout(timeout);
		};
	}, [scrollDir, scrollPosition]);

	const titleStyle2 =
		step > 0
			? {
					transform: `translateY(40vh)`,
					fontSize: '16px',
			  }
			: {};

	return (
		<>
			<div className={classNames(styles.container, step < 2 && styles.background)} ref={assignRefs(ref)}>
				<h1 style={titleStyle2} className={styles.titleContainer}>
					About Us
				</h1>
				<p
					className={classNames(styles.aboutStepOneText, step > 0 && 'hide')}
					style={{
						opacity: step === 0 ? 1 : 0,
					}}
				>
					Since 2020, our team has been a leading searcher in the Ethereum ecosystem. With the launch of MEV on
					Solana, we have expanded our infrastructure to support and enhance the Solana network, leveraging our
					expertise to benefit both - validators and searchers.
				</p>
				{step > 1 && <p className={styles.info}>{text[step]}</p>}
				{step > 0 && (
					<div className={styles.links}>
						<p>
							{titles.map((title, index) => (
								<h2 onClick={() => setStep(index + 2)}>
									<p
										className={classNames(
											styles.aboutItem,
											styles.link,
											step > 1 ? (step === index + 2 ? styles.selectedLink : styles.unselected) : null,
										)}
									>
										{title}
									</p>
								</h2>
							))}
						</p>
					</div>
				)}
			</div>
			{step > 1 && (
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

const test = () => {
	return (
		<div
			style={{
				height: '10000px',
			}}
		>
			<div
				style={{
					height: '2500px',
				}}
				className='block-1'
			></div>
			<div
				style={{
					height: '2500px',
				}}
				className='block-2'
			></div>
			<div
				style={{
					height: '2500px',
				}}
				className='block-3'
			></div>
			<div
				style={{
					height: '2500px',
				}}
				className='block-4'
			></div>
		</div>
	);
};

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
