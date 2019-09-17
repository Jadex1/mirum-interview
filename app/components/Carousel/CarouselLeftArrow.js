
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
    position: absolute;
    top: 50%;
    display: block;
    color: #black;
    cursor: pointer;
    opacity: .75;
    transform: translateY(-50%);
    transition: opacity .15s cubic-bezier(.4, 0, 1, 1);
    left: 32px;

    &:focus {
        outline: 0;
    }

    &:hover {
        opacity: .5;
    }
`;

class CaurouselLeftArrow extends PureComponent {
  render() {
    return (
      <StyledAnchor
        href="#"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </StyledAnchor>
    );
  }
}
export default CaurouselLeftArrow;
