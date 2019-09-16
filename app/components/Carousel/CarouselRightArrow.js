import { Component } from 'react';

const StyledAnchor = styled.a`

`;
const StyledSpan = styled.span`

`;
class CaurouselRightArrow extends Component {

    render() {
        return (
            <StyledAnchor
                href="#"
                onClick={this.props.onClick}
            >
                <StyledSpan />
            </StyledAnchor>
        );
    }
}
export default CaurouselRightArrow;