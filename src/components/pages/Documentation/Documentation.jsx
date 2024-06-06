import React from 'react';
import styles from './Documentation.module.css';
import DownloadIcon from '../../../assets/icons/download-icon.svg?react';
import Button from '../../ui/Button/Button';

const Documentation = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Documentation</h1>
				<p>
					Detailed documentation is available to guide you through the setup and optimization of your validator in
					our system.
				</p>
			</div>
			<div className={styles.buttonContainer}>
				<Button
					style={{
						background: 'rgba(0, 163, 255, 1)',
					}}
				>
					<DownloadIcon />
				</Button>
			</div>
			{/* <ul className={styles.docs}>
				<li className={styles.doc}>
					<p>doc1</p>
					<button>
						<DownloadIcon />
					</button>
				</li>
				<li className={styles.doc}>
					<p>doc1</p>
					<button>
						<DownloadIcon />
					</button>
				</li>
				<li className={styles.doc}>
					<p>doc1</p>
					<button>
						<DownloadIcon />
					</button>
				</li>
				<li className={styles.doc}>
					<p>doc1</p>
					<button>
						<DownloadIcon />
					</button>
				</li>
			</ul> */}
		</div>
	);
};

export default Documentation;
