import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './AboutUsMore.module.css';
import Video from '../../../assets/video/aboutUs.mp4';
import classNames from 'classnames';
import { useSwipeable } from 'react-swipeable';
import { assignRefs } from '../../../utils/assignRefs';

const text = {
	0: `After you update the validator software (just like connecting Jito), our MEV 
    system will start working on your slots. We will share the profits with you through 
    daily payouts. You can monitor all the details using the admin panel.`,
	1: `We have analyzed our competitors including jtio and found that our payout is significantly higher than others. The reasons for this are that we give more revenue to our validators, and our MEV is more communal and accurate.`,
	2: `Our relation manager will contact you and provide exact instructions on connection and will follow you around until you're completely through the process.
    You will have to update software of your validator (just like if you were connecting to jito). `,
};

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
			return prev < 2 ? prev + 1 : prev;
		});
	});

	const prevStep = useCallback(() => {
		setStep((prev) => {
			return prev > 0 ? prev - 1 : prev;
		});
	});

	const scrollHandler = (event) => {
		if (!detailed) return;

		const scrollDown = event.deltaY > 0;
		const scrollUp = event.deltaY < 0;

		if (step === 0 && scrollUp) {
			scrollToPreviousSection();
			return;
		}

		if (step === 2 && scrollDown) {
			scrollToNextSection();
			return;
		}
		scrollDown ? nextStep() : prevStep();
	};

	const swipeHandler = (direction) => {
		if (!detailed) return;

		if (step === 0 && direction === 'down') {
			scrollToPreviousSection();
			return;
		}

		if (step === 2 && direction === 'up') {
			scrollToNextSection();
			return;
		}
		direction === 'up' ? nextStep() : prevStep();
	};

	useEffect(() => {
		if (videoRef.current) videoRef.current.currentTime = 0;

		const handler = (event) => {
			event.preventDefault();
			scrollHandler(event);
		};

		ref.current?.addEventListener('wheel', handler);

		return () => ref.current?.removeEventListener('wheel', handler);
	}, [step]);

	const onSwipedUp = () => swipeHandler('up');
	const onSwipedDown = () => swipeHandler('down');

	const swipeConfig = {
		onSwipedUp,
		onSwipedDown,
		touchEventOptions: { passive: false },
		preventScrollOnSwipe: true,
		trackTouch: true,
		delta: 1,
	};

	const swipeHandlers = useSwipeable(swipeConfig);

	return (
		<>
			<div
				className={classNames(styles.container, !detailed && styles.background)}
				ref={assignRefs(ref, swipeHandlers.ref)}
			>
				{detailed && <p className={styles.info}>{text[step]}</p>}
				<div className={styles.links}>
					<p className={styles.about}>about us</p>
					<p>
						<h2>
							<a href='#' className={classNames(styles.link, getLinkStyle(1))}>
								How does it work?
							</a>
						</h2>
						<h2>
							<a href='#' className={classNames(styles.link, getLinkStyle(2))}>
								Spark-T advantages
							</a>
						</h2>
						<h2>
							<a href='#' className={classNames(styles.link, getLinkStyle(3))}>
								How to connect to Spark-T
							</a>
						</h2>
					</p>
				</div>
			</div>
			{detailed && (
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
