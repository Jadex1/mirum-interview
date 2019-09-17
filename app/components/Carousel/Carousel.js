import React, { Component } from 'react';
import styled from 'styled-components';
import ImageSlide from './ImageSlide';
import CarouselLeftArrow from './CarouselLeftArrow';
import CarouselRightArrow from './CarouselRightArrow';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 300px;
    position: relative;
`;
const StyledUL = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none
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
    const { currentIndex } = this.state;
    const { slides } = this.props;
    return (
      <div>
        {/* <StyledContainer> */}
        <p>...hey</p>
          {/* <CarouselLeftArrow onClick={(e) => this.goToPrevSlide(e)} /> */}
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
          {/* <CarouselIndicators
          key={index}
          index={index}
          activeIndex={this.state.activeIndex}
          onClick={(e) => this.goToSlide(index)}
        /> */}
        {/* </StyledContainer> */}
        </div>
    );
  }
}

export default Carousel;
