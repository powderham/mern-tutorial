// Rendering in the app
import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './src/components/App';

// Fetching data from the API
import axios from 'axios';
import config from './config';


const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`) //url to API
    .then(resp => {
      return ReactDomServer.renderToString(
        <App initialContests={resp.data.contests} />
      );
    });

export default serverRender;
