import React from 'react';
import Categories from "./Categories/Categories";

class Homepage extends React.Component {

	render() {
		return (
			<div className="container">
				<h1>Homepage</h1>
				<Categories />
			</div>
		);
	}
}

export default Homepage;