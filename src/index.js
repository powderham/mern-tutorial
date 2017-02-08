import React from 'react';
import ReactDOM from 'react-dom';
import data from './testData.json';

import App from './components/App.js';

ReactDOM.render(
  <App initialContests={window.initialData.contests}/>,
  document.getElementById('root')
);
