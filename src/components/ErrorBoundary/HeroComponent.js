import React from "react";

const divStyle = {
    display:"flex" ,
    justifyContent:"center" ,
}

function HeroComponent({name})  {
    if(name==="villan"){
        throw new Error("Not a hero")
    }

    return (
        <div style={divStyle}>
            <h4>{name} component rendered suceesfully</h4>
        </div>
    )
}

export default HeroComponent;
