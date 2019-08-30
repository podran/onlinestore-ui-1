import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

class Header extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<header className="Header container">
				<ul className="menu">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/register">Register</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/profile">Profile</Link></li>
					<li><Link to="/cart">Cart</Link></li>
				</ul>
			</header>
		);
	}
}

export default Header;