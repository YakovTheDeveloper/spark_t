import React from 'react';
import styles from './Welcome.module.css';
import Logo from '../../../assets/logo.png';
import Blur2 from '../../../assets/blur/blur2.png';
import Blur from '../../../assets/blur/blur1.png';
import classNames from 'classnames';

const Welcome = () => {
	return (
		<div className={styles.container}>
			{/* <img src={Blur} className={styles.blur}></img>
			<img src={Blur2} className={styles.blur2}></img> */}
			<div className={styles.inner}>
				<div className={styles.brandContainer}>
					<h1>Welcome to</h1>
				</div>
				<div className={styles.logoContainer}>
					<img src={Logo} alt='logo' />
					<div className={styles.brandContainer}>
						<p className={styles.brand}>spark-t</p>
						<p
							className={classNames(styles.info, styles.infoBrand)}
							style={{
								position: 'absolute',
								top: '45px',
							}}
						>
							<span>Unlock full potential of being</span>
							<span>a validator with us</span>
						</p>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<p className={styles.info}>
					Empowering Validators on Solana with <span>Spark-T MEV Infrastructure</span>
				</p>
			</div>
		</div>
	);
};

export default Welcome;
