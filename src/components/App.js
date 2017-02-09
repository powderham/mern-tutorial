import React from 'react';
import axios from 'axios';
import Header from './Header.js';

import Contest from './Contest'
import ContestList from './ContestList'

import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    pageHeader: "Hello World from React",
    contests: this.props.initialContests
  }
  componentDidMount(){

  }
  componentWillUnmount(){
  }
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId} ,
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  }
  currentContent(){
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />

    }
    return  <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} />
  }
  render(){
    return (
      <div>
        <Header message = {this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  };
};

export default App;
