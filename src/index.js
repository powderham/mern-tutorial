import React from 'react';
import ReactDOM from 'react-dom';

import data from './testData.json';

import App from './components/App.js';

ReactDOM.render(
  <App contests={data.contests}/>,
  document.getElementById('root')
);
