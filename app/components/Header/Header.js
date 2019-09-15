import React from 'react';
import { Link } from 'react-router-dom';
// import Banner from './images/banner.jpg';
// import Wrapper from './Wrapper';
// import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <>
        <Link className="router-link" to="/">
          The Amazing Site!
        </Link>
      </>
    );
  }
}

export default Header;
