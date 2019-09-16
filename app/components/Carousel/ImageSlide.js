import styled from 'styled-components';
import { Component } from 'react';

const StyledLI = styled.li`

`;
class ImageSlide extends Components {

    render() {
        return (
            <StyledLI>
                <img src={this.props.image} />
                <p>
                    Doctor: {this.props.doctorNumber}
                    Actor: {this.props.actorName}
                </p>
            </StyledLI>
        );
    }
}
export default ImageSlide;