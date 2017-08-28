import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Results extends Component{

 handleClick = (list) => {
   this.props.history.push(`/details/${list.id}`,list);
 }

  render(){
    const lists = this.props.results.map(list => {
      if(!list.thumbnail_url) return <div>no video</div>
      return <div key={list.id} className="car-card">
        <MuiThemeProvider>
          <Card onClick={this.handleClick.bind(this,list)} >
          <CardMedia
             overlay={<CardTitle title={list.year + ' ' + list.make + ' ' + list.model} subtitle={list.price} />}>
             <img src={list.thumbnail_url} alt="" />
           </CardMedia>
           <CardText>{list.city + ', ' + list.state }</CardText>
          </Card>
         </MuiThemeProvider>
      </div>
    });

    return (
      <div>
      <div><h2 className="result_title">These are the results of your search</h2></div>
       <div>{lists}</div>
       <br/>
      </div>
    );
  }
}

export default Results;
