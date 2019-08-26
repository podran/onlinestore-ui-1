import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import UserService from '../services/user.service';

class Login extends React.Component {

	constructor(props) {
		super(props);
	}

	send(values) {
		UserService
			.login(values.email, values.password)
			.then(response => response.json())
			.then(response => {
				document.cookie = "user=" + response.token;
				this.props.history.push('/');
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="container">
				<h1>Login</h1>
				<Formik
					initialValues={{email: '', password: ''}}
					onSubmit={this.send.bind(this)}>
					<Form className="col-sm-6">
						<div className="form-group">
							<label>Email:</label>
							<Field name="email" type="text" className="form-control" />
							<ErrorMessage name="email" component="div" className="alert alert-danger" />
						</div>
						<div className="form-group">
							<label>Password:</label>
							<Field name="password" type="text" className="form-control" />
						</div>
						<div className="form-group">
							<input type="submit" value="Login" className="btn btn-primary" />
						</div>
					</Form>
				</Formik>
			</div>
		);
	}
}

export default Login;