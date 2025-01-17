import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledA = styled.a`
    display: ${(props) => (props.index === props.activeIndex ? 'block' : 'none')}};;
    width: 24px;
    height: 3px;
    background-color: #111;
    cursor: pointer;
    opacity: ${(props) => (props.index === props.activeIndex ? '.75' : '.15')};
    transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

    &:hover {
      opacity: .5;
    }
`;
const StyledLi = styled.li`
  list-style-type: none;
`;
class CarouselIndicator extends PureComponent {
  render() {
    const { onClick } = this.props;
    return (
      <StyledLi>
        <StyledA
          onClick={onClick}
        />
      </StyledLi>
    );
  }
}

export default CarouselIndicator;
