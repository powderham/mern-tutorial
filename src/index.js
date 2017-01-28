import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return (
    <h2>
     {props.componentMessage}
    </h2>
  );
};



ReactDOM.render(
  <App componentMessage="Hello World!!"/>,
  document.getElementById('root')
);
