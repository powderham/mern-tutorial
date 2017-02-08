import React from 'react';
import axios from 'axios';
import Header from './Header.js';

import ContestList from './ContestList'

class App extends React.Component {
  state = {
    pageHeader: "Hello World from React",
    contests: this.props.initialContests
  }
  componentDidMount(){

  }
  componentWillUnmount(){
  }
  render(){
    return (
      <div>
        <Header message = {this.state.pageHeader} />
        <ContestList contests={this.state.contests} />
      </div>
    );
  };
};

export default App;
