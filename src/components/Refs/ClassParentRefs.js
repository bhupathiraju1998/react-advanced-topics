import React, { Component } from 'react';
import FunctionalChildRef from './FunctionalChildRef';
import '../../App.css'

class ClassParentRefs extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    handleRef = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div className='App'>
                <p>{"<"}------------------------------------------------------------------------------{">"}</p>
                <p>Forward Ref Usage on use of click me button</p>
                <FunctionalChildRef ref={this.inputRef}/>
                <button onClick={this.handleRef}>Click Me</button>
            </div>
        );
    }
}

export default ClassParentRefs;