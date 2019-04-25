/* eslint-disable react/jsx-indent */
import React from 'react';
import './index.css';
import AppContext from '../../context';
import Form from '../../components/Form/Form';
import ReportView from '../ReportView/ReportView';

class Root extends React.Component {
	state = {
		reports: [],
	};

	render() {
		const contextElements = {
			...this.state,
		};
		return (
			<AppContext.Provider value={contextElements}>
				<Form />
				<ReportView />
			</AppContext.Provider>
		);
	}
}

export default Root;
