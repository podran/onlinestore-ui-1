import React from 'react';
import CategoryService from './services/category.service';

class Homepage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: []
		}
	}

	componentDidMount() {
		CategoryService
			.getAll()
			.then(res => res.json())
			.then(categories => {
				this.setState({categories});
			});
	}

	render() {
		return (
			<div className="container">
				<h1>Homepage</h1>
				{this.state.categories.map(category => {
					return <div>{category.name}</div>
				})}
			</div>
		);
	}
}

export default Homepage;