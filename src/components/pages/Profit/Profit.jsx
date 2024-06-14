import React, { useEffect, useState } from 'react';
import styles from './Profit.module.css';
import Logo from '../../../assets/logo.png';
import Input from '../../ui/Input/Input';
// import { Spoiler as SpoilerSvg } from '../../../assets/spoiler.svg?react';
import classNames from 'classnames';
import Button from '../../ui/Button/Button';
import { useDataStore } from '../../../../store';
import { Spoiler } from 'spoiled';

const Profit = () => {
	const [stake, setStake] = useState('');
	const step = useDataStore((s) => s.step);
	const setStep = useDataStore((s) => s.setStep);
	const isFinalStep = step === 1;

	// const [isEnd, setIsEnd] = useState(false);

	useEffect(() => {
		if (isFinalStep || !stake) return;

		const timeout = setTimeout(() => {
			setStep(1);
		}, 150);
		return () => clearTimeout(timeout);
	}, [stake]);

	// useEffect(() => {
	// 	if (step === 1) {
	// 		document.body.classList.add('end');
	// 	}
	// 	if (isFinalStep) {
	// 		setIsEnd(true);
	// 		return;
	// 	}
	// 	if (step !== 1) return;
	// 	setTimeout(() => {
	// 		setStep(2);
	// 	}, 300);
	// }, [step]);

	const [hidden, setHidden] = useState(true);

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
						{isFinalStep ? <span>0.7</span> : <Spoiler>.........</Spoiler>}
						Sol per Day
					</p>
					<p>
						<span className={styles.opacityText}>And</span>
						{isFinalStep ? <span>21</span> : <Spoiler>..........</Spoiler>}
						Sol per Month
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
