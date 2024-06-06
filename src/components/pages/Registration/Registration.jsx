import React, { useState } from 'react';
import styles from './Registration.module.css';
import classNames from 'classnames';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

const ValidatorForm = ({ className }) => {
	const [form, setForm] = useState({});

	return (
		<form action='POST' className={classNames(styles.formContainer, className)}>
			<Input value={''} className={styles.formInput} label={'Specify the Identity of your validator(s)'} />
			<Input value={''} className={styles.formInput} label={'Provide the desired address for payouts'} />
			<Input value={''} className={styles.formInput} label={'Your Telegram '} />
			<Button>Submit</Button>

			{/* <Button>Submit</Button> */}
		</form>
	);
};

const SearcherForm = ({ className }) => {
	const [form, setForm] = useState({});

	return (
		<form action='POST' className={classNames(styles.formContainer, className)}>
			<Input
				value={''}
				className={styles.formInput}
				label={'Describe your experience and the strategies you would like to implement using our mempool'}
			/>
			<Input value={''} className={styles.formInput} label={'Your Telegram '} />
			<Button>Submit</Button>
		</form>
	);
};

const Registration = () => {
	const [choice, setChoice] = useState('validator');

	return (
		<div className={styles.container}>
			<div className={classNames(styles.reg)}>
				<h1>Registration</h1>
				<div className={classNames(styles.choice)}>
					<div className={classNames(styles.blurChoice, choice === 'searcher' && styles.right)} />
					<Button
						onClick={() => setChoice('validator')}
						className={classNames(styles.choiceItem, choice === 'validator' && styles.chosenItem)}
					>
						Validator
					</Button>
					<Button
						onClick={() => setChoice('searcher')}
						className={classNames(styles.choiceItem, choice === 'searcher' && styles.chosenItem)}
					>
						Searcher
					</Button>
				</div>

				<p className={classNames(styles.text, choice !== 'validator' && styles.hide)}>
					Join our network by registering as a validator and submitting your server location.
				</p>
				<p className={classNames(styles.text, choice !== 'searcher' && styles.hide)}>
					Sign up as a searcher to access our open mempool and contribute to the MEV ecosystem.
				</p>
			</div>
			<div className={styles.forms}>
				<ValidatorForm className={classNames(choice === 'validator' && styles.show)} />
				<SearcherForm className={classNames(choice === 'searcher' && styles.show)} />
			</div>
		</div>
	);
};

export default Registration;
