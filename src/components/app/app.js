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
			]
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

	render() {
		const employees = this.state.data.length;
		const increase = this.state.data.filter(elem => elem.increase).length;

		return (
			<div className="app">
				<AppHead
					employees={employees}
					increase={increase}
				/>
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployersList
					data={this.state.data}
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