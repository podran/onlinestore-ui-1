import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import UserService from '../services/user.service';
import cookie from 'react-cookies';

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			submitting: false
		};
	}

	send(values) {
		this.setState({submitting: true});
		UserService
			.login(values.email, values.password)
			.then(response => response.json())
			.then(response => {
				const twoWeeksTime = 60 * 60 * 24 * 14;
				cookie.save('user', response.token, { path: '/', maxAge: twoWeeksTime });
				this.setState({submitting: false});
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
							<input type="submit"
							       value={this.state.submitting ? 'Logging...' : 'Login'}
							       className="btn btn-primary"
							       disabled={this.state.submitting} />
						</div>
					</Form>
				</Formik>
			</div>
		);
	}
}

export default Login;