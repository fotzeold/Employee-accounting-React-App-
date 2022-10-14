import './employer-list-item.css';
import classes from 'classnames';

import { Component } from 'react';

class EmployersListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			increase: this.props.increase,
			like: false
		}
	}

	onIncrease = () => {
		this.setState(({ increase }) => ({
			increase: !increase
		}))
	}

	onLike = () => {
		this.setState(({ like }) => ({
			like: !like
		}))
	}

	render() {
		const { name, salary } = this.props;
		const { increase, like } = this.state;

		const classList = classes({
			'list-group-item': true,
			'd-flex': true,
			'justify-content-between': true,
			increase,
			like
		});

		return (
			<li className={classList}>
				<span className="list-group-item-label" onClick={this.onLike}>{name}</span>
				<input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
						className="btn-cookie btn-sm "
						onClick={this.onIncrease}>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
						className="btn-trash btn-sm ">
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		)
	}
}

export default EmployersListItem;