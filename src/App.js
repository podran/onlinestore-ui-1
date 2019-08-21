import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Register from "./Register";
import Login from "./Login";
import Homepage from "./Homepage";
import Header from "./Header";
import Profile from "./Profile";

class App extends React.Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header />

                <Route path="/" exact component={Homepage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
            </div>
        </Router>
    );
  }
}

export default App;
