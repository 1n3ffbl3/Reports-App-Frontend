import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

function ListItem({ title, latitude, longitude }) {
	return (
		<li className={styles.wrapper}>
			List item
			<h1>{title}</h1>
			<p>{latitude}</p>
			<p>{longitude}</p>
		</li>
	);
}

ListItem.propTypes = {
	title: PropTypes.string.isRequired,
	latitude: PropTypes.string.isRequired,
	longitude: PropTypes.string.isRequired,
};
export default ListItem;
