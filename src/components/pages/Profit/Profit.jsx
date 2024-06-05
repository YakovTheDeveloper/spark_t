import React from 'react';
import styles from './Profit.module.css';
import Logo from '../../../assets/logo.png';
import Input from '../../ui/Input/Input';
import Spoiler from '../../../assets/spoiler.svg?react';

const Profit = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Calculate Your profit</h1>
				<p className={styles.text}>Unlock the potential of being a validator with us</p>
			</div>
			<div className={styles.content}>
				<div className={styles.inputContainer}>
					<Input label={'Enter Your stake'} placeholder='sol' />
				</div>
				<div className={styles.result}>
					<p className={styles.willReceive}>You will receive </p>
					<p>
						<Spoiler /> Sol per Day
					</p>
					<p>
						And <Spoiler /> Sol per Month
					</p>
				</div>
			</div>
		</div>
	);
};

export default Profit;
