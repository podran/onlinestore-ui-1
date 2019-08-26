import React from 'react';
import CategoryService from '../services/category.service';
import { Link } from "react-router-dom";

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
				<div className="categories">
					{this.state.categories.map((category, i) => {
						return <Link to={'/category/' + category._id} className="category" key={i}>{category.name}</Link>
					})}
				</div>
			</div>
		);
	}
}

export default Homepage;