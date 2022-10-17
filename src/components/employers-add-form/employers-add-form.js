import { Component } from 'react';
import classes from 'classnames';

import './employees-add-form.css';

class EmployersAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
			inputClass: false
		}
	}

	onValueChange = (event) => {
		const eTarget = event.target;
		this.setState({
			[eTarget.name]: eTarget.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.name.length < 3 || this.state.salary.length < 3) {
			this.setState({
				inputClass: true
			})
		} else {
			this.props.onAdd(this.state.name, this.state.salary);
			this.setState({
				name: '',
				salary: '',
				inputClass: false
			})
		}
	}

	render() {
		const { name, salary, inputClass } = this.state;

		const classWarn = classes({
			warning: true,
			inputClass
		});

		return (
			<div className="app-add-form">
				<h3>Добавте нового працівника:</h3>
				<form
					onSubmit={this.onSubmit}
					className="add-form d-flex">

					<input type="text"
						className="form-control new-post-label"
						placeholder="Як його звати?"
						name="name"
						value={name}
						onChange={this.onValueChange} />

					<input type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name="salary"
						value={salary}
						onChange={this.onValueChange} />

					<button type="submit"
						className="btn btn-outline-light">Добавити</button>
				</form>

				<span className={classWarn}>Дані введено некорректно!</span>
			</div>)
	}
}

export default EmployersAddForm;