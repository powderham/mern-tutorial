import React from 'react';

const Header = ({message}) => {
  return(
    <h2>
      {message}
    </h2>
  );
};

Header.propTypes = {
  // isRequired would be redundant if a default value is provided
  message: React.PropTypes.string.isRequired
};

Header.defaultProps = {
  message: "Hello World"
}

export default Header;
