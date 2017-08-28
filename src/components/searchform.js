import React, { Component } from 'react';

class Searchform extends Component {
  constructor(props) {
    super(props);

    this.state = { price: '' };
  }


  handlePrice = (e)=> {
    this.setState({price: e.target.value});
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    this.props.history.push('/results');

    this.props.onSubmit({
      price: this.state.price
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='searchForm'>
          <input
                type='text' pattern='[0-9]*'
                value={this.state.price}
                onChange={this.handlePrice} />
      </form>
    );
  }
}

export default Searchform;
