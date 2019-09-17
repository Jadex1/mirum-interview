import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLI = styled.li`
    margin-right: auto;
    margin-left: auto;
    display: none;
    max-width: 900px;
    list-style-type: none;
    text-align: center;

    @media (max-width: 991px) {
        padding-right: 60px;
        padding-left: 60px;
    }

    &--active {
        display: block;
    }
`;
const StyledStrong = styled.strong`

`;

const StyledSmall = styled.small`
    font-family: 'Roboto', arial, sans-serif;
    font-size: 14px;
        
    @media (min-width: $breakpoint-desktop) {
        font-size: 16px;
    }
`;

class ImageSlide extends Component {
  render() {
    const { doctorNumber, actorName, image } = this.props;
    return (
      <>
      <StyledLI>
        <img src={image} alt={actorName} />
        <p>
            Doctor: {this.props.doctorNumber}
            Actor: {this.props.actorName}
        </p>
        <StyledStrong>
          {doctorNumber},
        </StyledStrong>
        <StyledSmall>
          {actorName}
        </StyledSmall>
      </StyledLI>
      </>
    );
  }
}
export default ImageSlide;
