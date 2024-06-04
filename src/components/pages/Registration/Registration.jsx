import React from 'react';
import styles from './Registration.module.css';
import Lines from '../../../assets/blur/radial_lines.png';
import classNames from 'classnames';

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
				<p className={styles.text}>
					Join our network by registering as a validator and submitting your server location.
				</p>
			</div>
			<div>
				<form action='POST' className={classNames(styles.formContainer, styles.validatorForm)}>
					val
				</form>
				<form action='POST' className={classNames(styles.formContainer, styles.searcherForm)}>
					ser
				</form>
			</div>
		</div>
	);
};

export default Registration;
