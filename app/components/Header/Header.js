import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <>
        <Wrapper>
          <h1>The Faces of The Doctor</h1>
          <p>The Doctor is an alien humanoid species of the kind called "timelords". When a timelord dies it retain all the memories, but different takes on a different apperance and demenor, than before. Theirs a saying it goes "Same software, different hardware"</p>
        </Wrapper>
      </>
    );
  }
}

export default Header;
