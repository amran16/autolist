import React, { Component } from 'react';
import './style/App.css';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'


import Home from './components/home';
import Results from './components/results';
import Details from './components/details'


class App extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }
  handleSubmit = () => {

    const params = 'page=1&price_min=3000&price_max=30000';

    axios.get(`https://autolist-test.herokuapp.com/search?${params}`)
     .then(response => {
       this.setState({
            results: response.data.records
        });
     })
     .catch(err => {
       console.log(err);
     })
  }
  render() {
    const renderResults = (props) => {
      return <Results
        results={this.state.results}
        {...props}
      />
    }
    return <Router>
            <div className="container">
             <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activeNav" to="/results">Results</NavLink></li>
                    <li><NavLink activeClassName="activeNav" to="/details">Details</NavLink></li>
                  </ul>
                </div>
              </div>
            </nav>
            <Route exact path="/" component={(props) => <Home onSubmit={this.handleSubmit} {...props} />}/>
            <Route path="/results" component={renderResults}/>
            <Route path="/details" component={(props) => (<Details {...props} />)}  />
          </div>
      </Router>
  }
}

export default App;
