import React from 'react';
import UserService from './services/user.service';

class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	componentDidMount() {
		UserService
			.me()
			.then(response => response.json())
			.then(user => {
				this.setState({
					user: user
				});
			});
	}

	render() {
		return (
			<div className="container">
				<h1>User</h1>
			</div>
		);
	}
}

export default Profile;