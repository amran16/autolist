import React, { Component } from 'react';
import axios from 'axios';

import Searchform from './searchform'

class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      list: []
    }

  }

  componentDidMount(){
    axios.get('https://autolist-test.herokuapp.com/search?page=1')
        .then(response => {
           this.setState({
             list: response.data.records
           });
         })
         .catch(error =>{
           console.log(error);
         })
  }

  render(){
    return (
      <div>
        <h3 className="title">Submit your search by price</h3>
         <Searchform onSubmit={this.props.onSubmit} {...this.props} />
      </div>
    );
  }
}

export default Home;
