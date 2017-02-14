// Rendering in the app
import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './src/components/App';

// Fetching data from the API
import axios from 'axios';
import config from './config';

const getApiUrl = contestId =>{
  if (contestId){
    return `${config.serverUrl}/api/contests/${contestId}`;
  }
  return `${config.serverUrl}/api/contests`;
};
const getInitialData = (contestId, apiData) => {
  if (contestId) {
    return {
      currentContestId: apiData._id,
      contests: {
        [apiData._id]: apiData
      }
    };
  }
  return {
    contests: apiData.contests
  };
};

const serverRender = (contestId) =>
  axios.get(getApiUrl(contestId))
    .then(resp => {
      const initialData = getInitialData(contestId, resp.data);
      return {
        initialMarkup: ReactDomServer.renderToString(
          <App initialData={initialData} />
        ), initialData
      };
    });

export default serverRender;
