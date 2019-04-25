/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import styles from './Form.module.scss';
import AppContext from '../../context';
import Input from '../Input/Input';

class Form extends React.Component {
	state = {
		title: '',
		latitude: '',
		longitude: '',
	};

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		const { title, latitude, longitude } = this.state;
		return (
			<AppContext.Consumer>
				{context => (
					<div className={styles.wrapper}>
						<h2 className={styles.header}>ADD NEW REPORT</h2>
						<form autoComplete="off" className={styles.form} onSubmit={event => context.addReport(event, this.state)}>
							<Input onChange={this.handleInputChange} value={title} name="title" label="Report title" required />
							<Input
								onChange={this.handleInputChange}
								value={latitude}
								name="latitude"
								label="Latitude of the report"
							/>
							<Input
								onChange={this.handleInputChange}
								value={longitude}
								name="longitude"
								label="Longitude of the report"
							/>
						</form>
					</div>
				)}
			</AppContext.Consumer>
		);
	}
}

export default Form;
