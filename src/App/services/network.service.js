import cookie from 'react-cookies';

export default class Network {

	getHeaders(customHeaders) {
		let headers = customHeaders || {
			'Content-Type': 'application/json'
		};

		if(this.getToken()) {
			headers.Authorization = this.getToken();
		}
		
		return headers;
	}

	getToken() {
		return cookie.load('user');
	}

	normalizeData(data, headers) {
		if(headers){
			return data;
		}
		return JSON.stringify(data);
	}

	send(method, url, data, customHeaders) {
		return fetch('http://localhost:4000/api' + url, {
			method: method,
			body: this.normalizeData(data, customHeaders),
			headers: this.getHeaders(customHeaders)
		});
	}
}
