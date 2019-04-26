import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import ListItem from './ListItem';
import Report from '../../model/Report';

function List({ reports }) {
	return (
		<>
			{reports ? (
				<ul className={styles.wrapper}>
					{reports.map(report => (
						<ListItem {...report} key={report.title} />
					))}
				</ul>
			) : (
				<div />
			)}
		</>
	);
}

List.propTypes = {
	reports: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.instanceOf(Report)])).isRequired,
};

export default List;
