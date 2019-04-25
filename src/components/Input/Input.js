/* eslint-disable react/jsx-indent */
import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

function Input({ name, label }) {
	return (
		<div className={styles.inputWrapper}>
			<input className={styles.input} id={name} type="text" />
			<label className={styles.label} htmlFor={name}>
				{label}
			</label>
			<div className={styles.inputBar} />
		</div>
	);
}

Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export default Input;
