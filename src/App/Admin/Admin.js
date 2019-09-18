import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Products from './Products/Products';
import UserService from '../services/user.service';


export class Admin extends Component {
    componentDidMount() {
        UserService.me()
        .then(res => res.json())
        .then(user => !user.isAdmin ? this.props.history.push('/') : null)
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link to="/admin/products">product</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to="/">category</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to="/">users</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-9">
                        <Route path="/admin/products" component={Products} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default Admin
