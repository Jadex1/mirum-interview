import React from 'react';
// import { Link } from 'react-router-dom';
// import Banner from './images/banner.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #4287f5;
    overflow: hidden;
    padding: 60px;
    text-align: center;
    font-size: 30px;

    h1 {
      color: white
    }

    p {
        color: white;
    }
`;
// import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <>
        <Wrapper>
          <h1>The Faces of The Doctor</h1>
          <p>The Doctor is an alien humanoid species of the kind called "timelords". Timelords have regnerations, they retain all the same memories, but different apperance and demenor.</p>
        </Wrapper>
      </>
    );
  }
}

export default Header;
