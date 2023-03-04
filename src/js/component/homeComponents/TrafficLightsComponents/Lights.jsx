import React from "react"



const Lights = ({className , onPressedLight, color}) =>{

    return (
        <div id={color} className={className} onClick={onPressedLight}></div>
    )
}

export default Lights;