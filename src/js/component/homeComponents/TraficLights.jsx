import React, {useState} from "react";
import Lights from "./TrafficLightsComponents/Lights.jsx";
import {RED, GREEN, YELLOW, PURPLE} from "../config.js";

const TraficLights = () => {
    let [activeLight,setActiveLight] = useState(false);
    let [extraLight,setExtraLight] = useState(false);



    const handlePressedLight = (e) => {
        setActiveLight(e.target.id)
    }
    
    const handleSwitchButton = () => {
        
        if(activeLight==RED){ 
            setActiveLight(YELLOW)
            return
        }
        if(activeLight==YELLOW){ 
            setActiveLight(GREEN)
            return
        }
        if(activeLight==GREEN && extraLight){ 
            setActiveLight(PURPLE)
            return
        }
        setActiveLight(RED)
    }

    const handlePurpleLight = () => {
        setExtraLight(!extraLight)
        console.log(extraLight)
    }  

    let redClass = activeLight==RED ? "light redActive" : "light redLight";
    let yellowClass = activeLight==YELLOW ? "light yellowActive" : "light yellowLight ";
    let greenClass = activeLight==GREEN ? "light greenActive" : "light greenLight";
    let purpleClass = activeLight==PURPLE ? "light purpleActive" : "light purpleLight";



    return(
        <div className="semaforo">
            <img className="lakitu" src="https://i.imgur.com/m1XJ9D3.png" />
            <div className=" body d-flex flex-column align-items-center">
                <div className="lightsHolder my-auto">
                    <Lights color={RED} className={redClass}  onPressedLight={handlePressedLight}/>
                    <Lights color={YELLOW} className={yellowClass} onPressedLight={handlePressedLight}/>
                    <Lights color={GREEN} className={greenClass} onPressedLight={handlePressedLight}/>
                    <Lights color={PURPLE} className={!extraLight ? purpleClass + " d-none": purpleClass} onPressedLight={handlePressedLight}/>                     
                </div>
            </div>
            <div className="botonera">
                <button className="my-2" onClick={handleSwitchButton}>Switch Lights</button>
                <button className="my-2" onClick={handlePurpleLight} >¿PURPLE LIGHT?</button>
            </div>
        </div>
    )
}



export default TraficLights;