import React from 'react';
import CategoryService from '../../services/category.service';
import { Link } from "react-router-dom";
import './Cateogries.scss';

class Categories extends React.Component {

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
			<div className="categories">
				{this.state.categories.map((category, i) => {
					return <Link to={'/category/' + category.id}
					             className="category"
					             key={i}>{category.name}</Link>
				})}
			</div>
		);
	}
}

export default Categories;