import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    background-color: black;
    overflow: hidden;
    position: fixed;
    text-align: center;
    left: 0;
    bottom: 0;
    width: 100%;

    p {
        color: white;
    }    
`;
const Footer = () => (
  <Wrapper>
      <p>@2019</p>
  </Wrapper>
);

export default Footer;
