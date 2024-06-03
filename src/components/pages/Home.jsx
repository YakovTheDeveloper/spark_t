import React from 'react';
import styles from './Home.module.css';
import Logo from '../../assets/logo.png';
import Blur2 from '../../assets/blur/blur2.png';
import Blur from '../../assets/blur/blur1.png';

const Home = () => {
	return (
		<div className={styles.container}>
			<img src={Blur} className={styles.blur}></img>
			<img src={Blur2} className={styles.blur2}></img>
			<div className={styles.inner}>
				<div className={styles.brandContainer}>
					<h1>Welcome to</h1>
				</div>
				<img src={Logo} alt='logo' />
				<div className={styles.brandContainer}>
					<p className={styles.brand}>spark-t</p>
					<p
						className={styles.info}
						style={{
							position: 'absolute',
						}}
					>
						<span>Unlock full potential of being</span>
						<span>a validator with us</span>
					</p>
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

export default Home;
