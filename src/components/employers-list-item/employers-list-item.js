import './employer-list-item.css';
import classes from 'classnames';
const EmployersListItem = (props) => {
	const { name, salary, onDelete, onToggleProp, increase, like } = props;

	const classList = classes({
		'list-group-item': true,
		'd-flex': true,
		'justify-content-between': true,
		increase,
		like
	});

	return (
		<li className={classList}>
			<span className="list-group-item-label" onClick={onToggleProp} data-toggle="like">{name}</span>
			<input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
			<div className='d-flex justify-content-center align-items-center'>
				<button type="button"
					className="btn-cookie btn-sm "
					data-toggle="increase"
					onClick={onToggleProp}>
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button"
					className="btn-trash btn-sm "
					onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	)
}

export default EmployersListItem;