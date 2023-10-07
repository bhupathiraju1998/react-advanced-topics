import React,{useRef,useEffect} from 'react'
import '../../App.css'

const FunctionalRef = () => {
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[])

  return (
    <div className='App'>
        <h5>Auto focus using useRef in functional component <input ref={inputRef} type="text"/></h5>
        
        
        </div>
  )
}

export default FunctionalRef