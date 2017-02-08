import React from 'react';

class ContestPreview extends Component {
  render() {
    return (
      <div className="ContestPreview" onClick={  }>
        <div className="category-name">
          {contest.categoryName}
        </div>
        <div className="contest-name">
          {contest.contestName}
        </div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  categoryName: React.PropTypes.string.isRequired,
  contestName: React.PropTypes.string.isRequired,
}

export default ContestPreview;
