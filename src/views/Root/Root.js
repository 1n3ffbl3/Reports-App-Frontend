/* eslint-disable react/jsx-indent */
import React from 'react';
import './index.css';
import AppContext from '../../context';
import ReportView from '../ReportView/ReportView';

class Root extends React.Component {
	state = {
		reports: [],
	};

	addReport = (event, newItem) => {
		event.preventDefault();

		this.setState(prevState => ({
			[newItem.type]: [...prevState[newItem.type], newItem],
		}));
	};

	render() {
		const contextElements = {
			...this.state,
			addReport: this.addReport,
		};
		return (
			<AppContext.Provider value={contextElements}>
				<ReportView />
			</AppContext.Provider>
		);
	}
}

export default Root;
