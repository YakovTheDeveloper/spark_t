import React from 'react';
import styles from './Documentation.module.css';
import DownloadIcon from '../../../assets/icons/download-icon.svg?react';

const Documentation = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Documentation</h1>
				<p>
					Comprehensive documentation is available to guide you through the setup and optimization of your
					validator on our infrastructure.
				</p>
			</div>
			<ul className={styles.docs}>
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
			</ul>
		</div>
	);
};

export default Documentation;
