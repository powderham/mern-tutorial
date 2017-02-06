import React from 'react';

import Header from './Header.js';

import ContestPreview from './ContestPreview.js';

class App extends React.Component {
  state = {pageHeader: "Hello World from React"}
  render(){
    return (
      <div>
        <Header message = {this.state.pageHeader} />
        <div>
          {this.props.contests.map(contest =>
            // using key here because react wants a key for each child in an iterator
            <ContestPreview key={contest.id} {...contest}/>
          )}
        </div>
      </div>
    );
  };
};

export default App;
