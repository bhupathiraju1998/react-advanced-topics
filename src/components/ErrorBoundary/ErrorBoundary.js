import React, { Component } from 'react';

const divStyle = {
    display:"flex" ,
    justifyContent:"center" ,
}

class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }

    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }


    render() {
        if(this.state.hasError){
            return <h4 style={divStyle}>Some thing went wrong in hero component-place fallback UI here</h4>
        }
        return this.props.children
    }
}

export default ErrorBoundary;