import React from 'react';
import axios from 'axios';
import Header from './Header.js';

import Contest from './Contest';
import ContestList from './ContestList';

import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

const onPopState = handler => {
  window.onpopstate = handler;
};

class App extends React.Component {
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  }
  state = this.props.initialData
  componentDidMount(){
    onPopState((event) => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId
      });
    });
  }
  componentWillUnmount(){
    onPopState(null);
  }
  addName = (newName, contestId) => {
    api.addName(newName, contestId).then(resp =>
      this.setState({
        contests: {
          ...this.state.contests,
          [resp.updatedContest._id]: resp.updatedContest
        },
        names: {
          ...this.state.names,
          [resp.newName._id]: resp.newName
        }
      })
    )
    .catch(console.error);
  }
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId} ,
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest._id,
        contests: {
          ...this.state.contests,
          [contest._id]: contest
        }
      });
    });
  }
  fetchContestList = () => {
    pushState(
      {currentContestId: null},
      '/'
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  }
  fetchNames = (nameIds) => {
    if (nameIds.length === 0){
      return;
    }
    api.fetchNames(nameIds).then(names => {
      this.setState({names});
    });
  }
  lookupName = (nameId) => {
    if (!this.state.names || !this.state.names[nameId]){
      return {
        name: '...'
      };
    }
    return this.state.names[nameId];
  }
  currentContest(){
    return this.state.contests[this.state.currentContestId];
  }
  pageHeader(){
    if(this.state.currentContestId){
      return this.currentContest().contestName;
    }
    return 'Naming Contests';
  }
  currentContent(){
    if (this.state.currentContestId) {
      return <Contest
              contestListClick={this.fetchContestList}
              fetchNames={this.fetchNames}
              lookupName={this.lookupName}
              addName={this.addName}
              {...this.currentContest()} />;

    }
    return  <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} />;
  }
  render(){
    return (
      <div>
        <Header message = {this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
