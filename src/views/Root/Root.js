/* eslint-disable react/jsx-indent */
import React from 'react';
import './index.css';
import AppContext from '../../context';
import ReportView from '../ReportView/ReportView';
import Form from '../../components/Form/Form';

class Root extends React.Component {
	state = {
		reports: [],
	};

	addReport = (event, newItem) => {
		event.preventDefault();
		this.setState({
			reports: reports,
		});
	};

	render() {
		const contextElements = {
			...this.state,
			addReport: this.addReport,
		};
		return (
			<AppContext.Provider value={contextElements}>
				<ReportView />
				<Form />
			</AppContext.Provider>
		);
	}
}

export default Root;
