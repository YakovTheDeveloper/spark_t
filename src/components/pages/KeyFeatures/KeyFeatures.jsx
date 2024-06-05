import React, { useEffect, useRef, useState } from 'react';
import styles from './KeyFeatures.module.css';
import Lines from '../../../assets/blur/radial_lines.png';
import classNames from 'classnames';
import useOnScreen from '../../../hooks/useOnScreen';
const data = [
	{
		title: 'Open Mempool for Searcher',
		content:
			'Fair Competition: We provide an open mempool for searchers, ensuring a level playing field for all. Register as a searcher through our simple form to get started.',
	},
	{
		title: 'Open Mempool for Searcher',
		content:
			'Fair Competition: We provide an open mempool for searchers, ensuring a level playing field for all. Register as a searcher through our simple form to get started.',
	},
	{
		title: 'Open Mempool for Searcher',
		content:
			'Fair Competition: We provide an open mempool for searchers, ensuring a level playing field for all. Register as a searcher through our simple form to get started.',
	},
	{
		title: 'Open Mempool for Searcher',
		content:
			'Fair Competition: We provide an open mempool for searchers, ensuring a level playing field for all. Register as a searcher through our simple form to get started.',
	},
	{
		title: 'Open Mempool for Searcher',
		content:
			'Fair Competition: We provide an open mempool for searchers, ensuring a level playing field for all. Register as a searcher through our simple form to get started.',
	},
];

const KeyFeatures = () => {
	const [wasAnimated, setWasAnimated] = useState(false);
	const ref = useRef();
	const onScreen = useOnScreen(ref);

	useEffect(() => {
		if (onScreen) setWasAnimated(onScreen);
	}, [onScreen]);

	// return <></>;

	return (
		<div className={styles.container}>
			<h1 ref={ref}>Key Features</h1>
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
