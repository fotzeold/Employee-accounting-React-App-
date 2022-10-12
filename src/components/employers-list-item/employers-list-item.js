import './employer-list-item.css';
import classes from 'classnames';

const EmployersListItem = ({ name, salary, increase }) => {

	const classList = classes({
		'list-group-item': true,
		'd-flex': true,
		'justify-content-between': true,
		increase,
	});

	return (
		<li className={classList}>
			<span className="list-group-item-label">{name}</span>
			<input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
			<div className='d-flex justify-content-center align-items-center'>
				<button type="button"
					className="btn-cookie btn-sm ">
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

export default EmployersListItem;