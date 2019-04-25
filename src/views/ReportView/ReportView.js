import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

function ReportView() {
	return <AppContext.Consumer>{context => <List reports={context.reports} />}</AppContext.Consumer>;
}

export default ReportView;
