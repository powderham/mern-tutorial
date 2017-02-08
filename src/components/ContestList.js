import React from 'react';
import ContestPreview from './ContestPreview.js';

const ContestList = ({contests}) => (
  <div>
    {contests.map(contest =>
      <ContestPreview key={contest.id} {...contest}/>
    )}
  </div>
);

ContestList.propTypes = {
  contests: React.PropTypes.array
}

export default ContestList;
