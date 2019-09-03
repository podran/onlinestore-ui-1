import React from 'react';
import './Cart.scss';
import CartService from '../services/cart.service';
import ProductService from '../services/product.service';

class Cart extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
	}

	componentDidMount() {
		let ids = CartService.getAll().map(product => product.id);
		ProductService.getByIds(ids)
			.then(res => res.json())
			.then(products => this.setState({products}))
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div>
				<h1>Cart</h1>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Quantity</th>
						</tr>
					</thead>
					<tbody>
						{this.state.products.map((product, index) => {
							return <tr key={index}>
								<td>{product.id}</td>
								<td>{product.qty}</td>
							</tr>
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Cart;