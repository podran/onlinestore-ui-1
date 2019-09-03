import React from 'react';
import ProductService from '../../services/product.service';
import CartService from '../../services/cart.service';
import './Product.scss';

class Product extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			product: {}
		};
	}

	componentDidMount() {
		ProductService.getById(this.props.match.params.id)
			.then(res => res.json())
			.then(product => this.setState({product}));
	}

	addToCart() {
		CartService.add(this.state.product.id, 1);
	}

	render() {
		return (
			<div>
				<h1>Product page</h1>
				{this.state.product.title}
				{this.state.product.price}
				<br />
				<br />
				<hr />
				<button className="btn-add-to-cart"
						onClick={this.addToCart.bind(this)}>Add to Cart</button>
		</div>
		);
	}
}

export default Product;