import React, { useEffect, useState } from 'react';
import styles from './Profit.module.css';
import Logo from '../../../assets/logo.png';
import Input from '../../ui/Input/Input';
import Spoiler from '../../../assets/spoiler.svg?react';
import classNames from 'classnames';
import Button from '../../ui/Button/Button';

const Profit = () => {
	const [stake, setStake] = useState('');
	const [step, setStep] = useState(0);
	const [isEnd, setIsEnd] = useState(false);
	const isFinalStep = step === 2;

	useEffect(() => {
		if (!stake || isEnd) return;
		const timeout = setTimeout(() => {
			setStep(1);
		}, 1000);
		return () => clearTimeout(timeout);
	}, [stake]);

	useEffect(() => {
		if (step === 1) {
			document.body.classList.add('end');
		}
		if (isFinalStep) {
			setIsEnd(true);
			return;
		}
		if (step !== 1) return;
		setTimeout(() => {
			setStep(2);
		}, 1000);
	}, [step]);

	return (
		<div className={classNames(styles.container, styles[`container-step-${step + 1}`])}>
			<div className={styles.header}>
				<h1>Calculate Your profit</h1>
				<p className={styles.text}>Unlock the potential of being a validator with us</p>
			</div>
			<div className={styles.content}>
				<div className={styles.inputContainer}>
					<Input
						size='big'
						label={'Enter Your stake'}
						placeholder='380 000 sol'
						value={stake}
						onChange={(e) => setStake(e.target.value)}
					/>
				</div>
				<div className={styles.result}>
					<p className={classNames(styles.opacityText, styles.willReceive)}>You will receive </p>
					<p>
						{isFinalStep ? <span>0.7</span> : <Spoiler className={styles.spoiler} />}
						Sol per Day
					</p>
					<p>
						<span className={styles.opacityText}>And</span>{' '}
						{isFinalStep ? <span>21</span> : <Spoiler className={styles.spoiler} />} Sol per Month
					</p>
				</div>
			</div>
			{isFinalStep && (
				<div className={styles.regButton}>
					<Button>Registration</Button>
				</div>
			)}
		</div>
	);
};

export default Profit;
