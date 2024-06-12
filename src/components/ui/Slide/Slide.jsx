import React, { forwardRef } from 'react';
import styles from './Slide.module.css';
import classNames from 'classnames';
import useOnScreen from '../../../hooks/useOnScreen';
import { useSwipeable } from 'react-swipeable';

const Slide = (props, ref) => {
	const { children, className = null, id = '', scrollToNextSection, scrollToPreviousSection } = props;

	// console.log('id', id);

	const handleSwipedUp = (event) => {
		// console.log('event', event);
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
		<section
			id={id}
			ref={(el) => {
				ref(el);
				// if (id === 'KeyFeatures') return;
				// if (id === 'AboutUsMoreDetailed') return;
				// swipeHandlers.ref(el);
			}}
			className={classNames(styles.slide, id && styles[id], className)}
		>
			{children}
		</section>
	);
};

const Forwarded = forwardRef(Slide);

export default React.memo(Forwarded);
