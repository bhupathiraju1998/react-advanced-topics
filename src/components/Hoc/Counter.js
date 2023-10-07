import React, { Component } from 'react';
import  HigherOrderComponent  from './HigherOrderComponent';
import { ButtonDiv, HocParagraph } from './styledComponents';

class Counter extends Component {
    render() {
        const {count,incrementCount} = this.props
        console.log("props",count)
        return (
            <div>
                <HocParagraph>Higher Order Component HOC</HocParagraph>
                
                <ButtonDiv>
                <button type="button" onClick={incrementCount}>clicked {count} times</button>

                </ButtonDiv>
                
            </div>
        );
    }
}

export default HigherOrderComponent(Counter);