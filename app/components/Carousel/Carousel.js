import React, { Component } from 'react';
import styled from 'styled-components';
import CarouselIndicator from './CarouselIndicator';
// import ImageSlide from './ImageSlide';
import CarouselLeftArrow from './CarouselLeftArrow';
import CarouselRightArrow from './CarouselRightArrow';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 300px;
    position: relative;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  bottom: 0;
  
  li {
    &:nth-of-type(n + 2) {
      margin-left: 9px;
    }
  }
`;
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const { slides } = this.props;
    const slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    const { slides } = this.props;
    const slidesLength = -slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }
    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    const { currentIndex, activeIndex } = this.state;
    const { slides } = this.props;
    return (
      <StyledContainer>
        <CarouselLeftArrow onClick={(e) => this.goToPrevSlide(e)} />
        {/* <StyledUL>
          {slides.map((slide, index) => (
            <ImageSlide
              key={index}
              index={index}
              activeIndex={currentIndex}
              slide={slide}
            />
          ))
          }
        </StyledUL> */}
        {/* <CarouselRightArrow onClick={(e) => this.goToNextSlide(e)} /> */}
        <CarouselRightArrow onClick={(e) => this.goToNextSlide(e)} />
        <StyledUl>
          {slides.map((slide, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={activeIndex}
              isActive={activeIndex === index}
              onClick={(e) => this.goToSlide(index)}
            />
          ))}
        </StyledUl>

      </StyledContainer>
    );
  }
}

export default Carousel;
