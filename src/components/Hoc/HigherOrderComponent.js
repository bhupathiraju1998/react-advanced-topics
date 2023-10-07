import React from 'react';

 const HigherOrderComponent = OriginalComponent => {

    class UpdatedComponent extends React.Component{
        
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return{
                    count:prevState.count+1
                }
            })
        }

        render(){
        
         
            return(<OriginalComponent count={this.state.count} incrementCount={this.incrementCount}/>)
        }
    }
  return  UpdatedComponent
  
}

export default HigherOrderComponent

