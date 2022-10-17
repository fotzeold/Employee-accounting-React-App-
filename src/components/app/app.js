import { Component } from 'react';

import AppHead from '../app-head/app.head';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../emloyers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'John S.', salary: 800, like: true, increase: true, id: 1 },
				{ name: 'Kate F.', salary: 3000, like: false, increase: true, id: 2 },
				{ name: 'Dana L.', salary: 1100, like: false, increase: false, id: 3 },
				{ name: 'Mike V.', salary: 1600, like: false, increase: false, id: 4 }
			],
			term: '',
			filter: 'all'
		}

		this.maxId = 5;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			like: false,
			increase: false,
			id: this.maxId++
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		});
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item;
			})
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) return items;

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({ term })
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'toRise':
				return items.filter(item => item.like)
			case 'moreThen1000':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	onFilterSelect = (filter) => {
		this.setState({ filter });
	}

	render() {
		const { data, term, filter } = this.state;
		const employees = this.state.data.length;
		const increase = this.state.data.filter(elem => elem.increase).length;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);

		return (
			<div className="app">
				<AppHead
					employees={employees}
					increase={increase}
				/>
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect}
					/>
				</div>
				<EmployersList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployersAddForm
					onAdd={this.addItem}
				/>
			</div>
		);
	}
}

export default App;