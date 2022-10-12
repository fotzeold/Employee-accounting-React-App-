import AppHead from '../app-head/app.head';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../emloyers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

	const data = [
		{ name: 'John S.', salary: 800, increase: true, id: 1 },
		{ name: 'Kate F.', salary: 3000, increase: false, id: 2 },
		{ name: 'Dana L.', salary: 1100, increase: false, id: 3 },
		{ name: 'Mike V.', salary: 1600, increase: false, id: 4 }
	];

	return (
		<div className="app">
			<AppHead />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployersList data={data} />
			<EmployersAddForm />
		</div>
	);
}

export default App;