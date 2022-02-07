import './App.css';
import React from 'react';
//import UserListing from './UserListing';
import ListHome from './components/ListHome';

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
     // moved to ListHome 
    }
  }

  render() {

    return (
      <React.Fragment>
        <ListHome />
      </React.Fragment>
    )
  }
}


 