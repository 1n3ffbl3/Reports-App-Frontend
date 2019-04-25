/* eslint-disable indent */
import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';

function Form() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.header}>ADD NEW ITEM</h2>
			<form className={styles.form}>
				<Input />
			</form>
		</div>
	);
}

export default Form;
