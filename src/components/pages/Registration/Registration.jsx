import React from 'react';
import styles from './Registration.module.css';
import classNames from 'classnames';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

const ValidatorForm = () => {
	return (
		<form action='POST' className={classNames(styles.formContainer, styles.validatorForm)}>
			<Input label={'Specify the Identity of your validator(s)'} />
			<Input label={'Provide the desired address for payouts'} />
			<Input label={'Your Telegram '} />
			<Button>Submit</Button>
		</form>
	);
};

const SearcherForm = () => {
	return (
		<form action='POST' className={classNames(styles.formContainer, styles.searcherForm)}>
			<Input label={'Describe your experience and the strategies you would like to implement using our mempool'} />
			<Input label={'Your Telegram '} />
			<Button>Submit</Button>
		</form>
	);
};

const Registration = () => {
	return (
		<div className={styles.container}>
			<div className={styles.choose}>
				<h1>Registration</h1>
				<div className={styles.choice}>
					<label for='Validator' className={styles.choiceItem}>
						Validator
						<input type='radio' id='Validator' name='choice' value='Validator' checked />
					</label>
					<label for='Searcher' className={styles.choiceItem}>
						Searcher
						<input type='radio' id='Searcher' name='choice' value='Searcher' />
					</label>
					{/* <button className={styles.choiceItem}>Validator</button> */}
					{/* <button className={styles.choiceItem}>Searcher</button> */}
				</div>
				<p className={classNames(styles.text, styles.textValidator)}>
					Join our network by registering as a validator and submitting your server location.
				</p>
				<p className={classNames(styles.text, styles.textSearcher)}>
					Sign up as a searcher to access our open mempool and contribute to the MEV ecosystem.
				</p>
			</div>
			<div className={styles.forms}>
				<ValidatorForm />
				<SearcherForm />
			</div>
		</div>
	);
};

export default Registration;
