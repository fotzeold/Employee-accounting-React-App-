import './app-head.css';

const AppHead = ({ increase, employees }) => {
	return (
		<div className="app-head">
			<h1>Облік працівників компанії</h1>
			<h2>Загальне число працівників: {employees}</h2>
			<h2>Премію получать: {increase}</h2>
		</div>
	)
}

export default AppHead;