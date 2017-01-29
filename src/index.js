import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js';

const App = () => {
  return (
    <div>
      <Header message = "Hello World from the header" />
      <div>
        ...
      </div>
    </div>
  );
};


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
