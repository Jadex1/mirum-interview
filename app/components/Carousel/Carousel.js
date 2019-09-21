import React, { Component } from 'react';
import styled from 'styled-components';
import ImageSlide from './ImageSlide';
import CarouselLeftArrow from './CarouselLeftArrow';
import CarouselRightArrow from './CarouselRightArrow';

const StyledContainer = styled.div`
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
    overflow: hidden;
    outline: 0px;
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
    }
  }
  //   this.setState({
  //     activeIndex: index
  //   });
  // }

  // goToPrevSlide(e) {
  //   e.preventDefault();
  //
  //   let index = this.state.activeIndex;
  //   const { slides } = this.props;
  //   const slidesLength = slides.length;
  //
  //   if (index < 1) {
  //     index = slidesLength;
  //   }
  //
  //   --index;
  //
  //   this.setState({
  //     activeIndex: index
  //   });
  // }

  // goToNextSlide(e) {
  //   e.preventDefault();
  //   let index = this.state.activeIndex;
  //   const { slides } = this.props;
  //   const slidesLength = -slides.length - 1;
  //
  //   if (index === slidesLength) {
  //     index = -1;
  //   }
  //   ++index;
  //
  //   this.setState({
  //     activeIndex: index
  //   });
  // }

  goToIndex(index) {
    const direction = (this.state.selectedIndex > index) ? 'previous' : 'next';

    this.setState({
      animationDirection: direction,
      selectedIndex: index
    });
  }

  progressSlideshow() {
    this.setState({ animationDirection: 'next' });

    this.timeout = setTimeout(() => {
      this.goInDirection('next');
      this.progressSlideshow();
    }, this.props.slideshowDelay);
  }

  componentDidMount() {
    if (this.props.slideshowActive) {
      this.progressSlideshow();
    }
  }

  goInDirection(direction) {
    const totalImages = this.props.slides.length;
    const modifier = (direction === 'next') ? 1 : -1; // this is why, "previous", "next" is important

    let newIndex = this.state.selectedIndex + modifier;

    // these are for handling edge cases.
    if (newIndex === totalImages) {
      newIndex = 0;
    } else if (newIndex === -1) {
      newIndex = totalImages - 1;
    }

    this.setState({
      animationDirection: direction,
      selectedImage: this.props.slides[newIndex]
    });
  }

  renderCurrentSlide() {
    const { activeIndex } = this.state;
    const currentSlide = this.props.slides[activeIndex];
    return (
      <ImageSlide
        key={activeIndex.id}
        index={activeIndex}
        slide={currentSlide}
      />
    );
  }

  render() {
    const { slides } = this.props;
    // const Animation = React.addons.CSSTransitionGroup;

    return (
      <StyledContainer>
        <CarouselLeftArrow onClick={() => this.goInDirection('previous')} />
        {this.renderCurrentSlide()}
        <CarouselRightArrow onClick={() => this.this.goInDirection('next')} />
        {/*<StyledUl>*/}
          {/*{slides.map((slide, index) => (*/}
          {/*  <CarouselIndicator*/}
          {/*    key={index}*/}
          {/*    index={index}*/}
          {/*    activeIndex={activeIndex}*/}
          {/*    isActive={activeIndex === index}*/}
          {/*    onClick={(e) => this.goToSlide(index)}*/}
          {/*  />*/}
          {/*))}*/}
        {/*</StyledUl>*/}
      </StyledContainer>
    );
  }
}

// propTypes: {
//   slides: React.PropTypes.arrayOf([
//     React.PropTypes.number,
//     React.PropTypes.string,
//     React.PropTypes.string,
//     React.PropTypes.string,
//     React.PropTypes.string,
//     React.PropTypes.string
//   ]).isRequired,
//   slideshowActive: React.PropTypes.bool,
//   slideshowDelay: React.PropTypes.number
// };

export default Carousel;
