import React, { useEffect, useRef, useState } from 'react';
import styles from './KeyFeatures.module.css';
import Lines from '../../../assets/blur/radial_lines.png';
import classNames from 'classnames';
import useOnScreen from '../../../hooks/useOnScreen';
import { useSwipeable } from 'react-swipeable';
const data = [
	{
		title: 'Open Mempool for Searcher',
		content: `
            We provide an open mempool for searchers, ensuring fair competition. Register 
as a searcher through our simple form to get started
            `,
	},
	{
		title: 'MEV Execution',
		content: `
            We actively execute MEV to stimulate competition within our open mempool, 
ensuring the most efficient and fair operations
            `,
	},
	{
		title: 'MEV Revenue Burning',
		content: `
        Validators have the opportunity to burn MEV revenue to boost their base APY, 
        enhancing their overall returns
            `,
	},
	{
		title: 'Optional Front-Running Inclusion',
		content: `
        Validators are flexible, as by connecting to our system it is possible to enable or 
        disable the front-running option based on preferences
            `,
	},
];

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.8,
};

const KeyFeatures = () => {
	const [wasAnimated, setWasAnimated] = useState(false);
	const ref = useRef();
	const onScreen = useOnScreen(ref, options);

	useEffect(() => {
		if (onScreen) setWasAnimated(onScreen);
	}, [onScreen]);

	// return <></>;

	return (
		<div className={styles.container} ref={ref}>
			<h1>Key Features</h1>
			<div className={styles.features}>
				{data.map(({ content, title }, i) => (
					<div className={classNames(styles.box, wasAnimated && styles[`box-${i + 1}`])}>
						<h2>{title}</h2>
						<p>{content}</p>
					</div>
				))}
				<div className={classNames(styles.ball, wasAnimated && styles.ballAnimated)} />
				<div className={classNames(styles.ballLine, wasAnimated && styles.ballLineAnimated)} />
			</div>
		</div>
	);
};

export default KeyFeatures;
