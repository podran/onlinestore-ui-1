import React from 'react';
import ProductService from '../services/product.service';
import './Category.scss';

class Category extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
	}

	componentDidMount() {
		ProductService.getByCategoryId(this.props.match.params.id)
			.then(res => res.json())
			.then(products => this.setState({products}));
	}

	render() {
		return (
			<div>
				{this.state.products.map((product, index) => {
					return <div key={index}>{product.title}</div>;
				})}
			</div>
		);
	}
}

export default Category;