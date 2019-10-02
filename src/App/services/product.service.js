import Network from './network.service';

class ProductService extends Network {
	create(product) {
		const data = new FormData();
		for(let key in product) {
			data.append(key, product[key]);
		}
		return this.send('PUT', '/product', data, {});
	}

	getByCategoryId(categoryId) {
		return this.send('GET', `/category/${categoryId}/product`);
	}

	getById(productId) {
		return this.send('GET', `/product/${productId}`);
	}

	getByIds(productIds) {
		return this.send('POST', '/product/bulk', {
			ids: productIds
		});
	}

}

export default new ProductService();