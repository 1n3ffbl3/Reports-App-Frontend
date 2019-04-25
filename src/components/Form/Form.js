/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import styles from './Form.module.scss';
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
			<div className={styles.wrapper}>
				<h2 className={styles.header}>ADD NEW REPORT</h2>
				<form className={styles.form}>
					<Input onChange={this.handleInputChange} value={title} name="title" label="Report title" required />
					<Input onChange={this.handleInputChange} value={latitude} name="latitude" label="Latitude of the report" />
					<Input onChange={this.handleInputChange} value={longitude} name="longitude" label="Longitude of the report" />
				</form>
			</div>
		);
	}
}

export default Form;
