import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import User from './models/user';
import UserService from './services/user.service';

class Register extends React.Component {

	constructor(props) {
		super(props);

	}

	send(values) {
		UserService
			.register(values)
			.then(() => {
				this.props.history.push('/login');
			});
	}

	render() {
		return (
			<div className="container">
				<Formik
					initialValues={{name: '', email: '', password: '', age: ''}}
					validationSchema={User}
					onSubmit={this.send.bind(this)}>
					<Form>
						<div className="form-group">
							<label>Name:</label>
							<Field name="name" type="text" className="form-control" />
						</div>
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
							<label>Age:</label> <Field name="age" type="text" className="form-control" />
						</div>
						<div className="form-group">
							<input type="submit" value="Submit" className="btn btn-primary" />
						</div>
					</Form>
				</Formik>
			</div>
		);
	}
}

export default Register;