import React from 'react';
import styles from './KeyFeatures.module.css';
import Lines from '../../../assets/blur/radial_lines.png';
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
	return (
		<div className={styles.container}>
			<h1>Key Features</h1>
			<div className={styles.features}>
				{data.map(({ content, title }) => (
					<div className={styles.box}>
						<h2>{title}</h2>
						<p>{content}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default KeyFeatures;
