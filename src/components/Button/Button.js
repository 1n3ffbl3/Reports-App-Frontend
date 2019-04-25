/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ children }) {
	return (
		<button className={styles.button} type="button">
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.string.isRequired,
};
export default Button;
