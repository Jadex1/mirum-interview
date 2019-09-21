import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledImageContainer = styled.div`
    border: 1px solid #fff;
		position: relative;

    @media (max-width: 991px) {
      padding-right: 60px;
      padding-left: 60px;
  }
`;

const StyledStrong = styled.strong`
  font-family: 'Roboto', arial, sans-serif;
  font-size: 14px;

  @media (min-width: $breakpoint-desktop) {
    font-size: 16px;
  }
`;

const StyledP = styled.p`
  margin-bottom: 19px;
  font-family: 'Open Sans', 'Trebuchet MS', sans-serif;
  font-size: 16px;
`;

const StyledSmall = styled.small`
    font-family: 'Roboto', arial, sans-serif;
    font-size: 14px;
        
    @media (min-width: $breakpoint-desktop) {
        font-size: 16px;
    }
`;

class ImageSlide extends PureComponent {
  render() {
    const { doctorNumber, actorName, image } = this.props.slide;
    return (
      <StyledImageContainer>
        <img src={image} alt={`missing img, ${doctorNumber}`}/>
        <StyledP>
          <StyledStrong>
            Doctor: {doctorNumber},
          </StyledStrong>
          <br/>
          <StyledSmall>
            Actor: {actorName}
          </StyledSmall>
        </StyledP>
      </StyledImageContainer>
    );
  }
}
export default ImageSlide;
