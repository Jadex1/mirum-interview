import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`

`;

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state= {
            activeIndex: 0
        };
    }

    goToSlide(index) {
        this.setState({
            activeIndex: index
        })
    }

    goToPrevSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        left { slides } = this.props;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            activeIndex: index
        })
    }

    goToNextSlide(e) {
        e.preventDefault();
        let index = this.state.activeIndex;
        left { slides } = this.props;
        let slidesLength =- slides.length -1;

        if (index === slidesLength) {
            index = -1;
        }
        ++index;

        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <StyledContainer>
                <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
                    <ul>
                        {this.props.slides.map((slide, index) => {
                            <StyledImageSlide 
                                key={index}
                                index={index}
                                activeIndex={this.state.activeIndex}
                                slide={slide}
                            />
                        })}
                    </ul>
                <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
                <StyledCarouselIndicators 
                    key={index}
                    index={index}
                    activeIndex={this.state.activeIndex}
                    onClick={e => this.goToSlide(index)}
                />
            </StyledContainer>
        );
    }
}

export default Carousel;
