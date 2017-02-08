import React from 'react';
import axios from 'axios';
import Header from './Header.js';

import ContestPreview from './ContestPreview.js';

class App extends React.Component {
  state = {
    pageHeader: "Hello World from React",
    contests: this.props.initialContests
  }
  componentDidMount(){
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        })
      })
      .catch(console.error)
  }
  componentWillUnmount(){

  }
  render(){
    return (
      <div>
        <Header message = {this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            // using key here because react wants a key for each child in an iterator
            <ContestPreview key={contest.id} {...contest}/>
          )}
        </div>
      </div>
    );
  };
};

export default App;
