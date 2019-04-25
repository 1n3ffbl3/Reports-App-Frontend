/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

function Input({ name, label, ...props }) {
	return (
		<div className={styles.inputWrapper}>
			<input className={styles.input} id={name} type="text" name={name} placeholder=" " {...props} />
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
