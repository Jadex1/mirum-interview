import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
    margin-right: auto;
    margin-left: auto;
    display: ${(props) => (props.index === props.activeIndex ? 'block' : 'none')}};
    max-width: 900px;
    list-style-type: none;
    text-align: center;

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
      <>
        <StyledLi>
          {/* <img src={image} alt={actorName} /> */}
          <StyledP>
            <StyledStrong>
              Doctor: {doctorNumber},
            </StyledStrong>
            <StyledSmall>
              Actor: {actorName}
            </StyledSmall>
          </StyledP>
        </StyledLi>
      </>
    );
  }
}
export default ImageSlide;
