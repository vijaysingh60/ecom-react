import React, { useState } from "react";
import iconX from "./images/icon-plus.svg"
import prev from "./images/icon-previous.svg"
import next from "./images/icon-next.svg"

function Images(){

    const [num,setnum] = useState("1");
    const [remove,setRemove] = useState(true)

    function changeImage(event){
        setnum(event.target.alt)
    }
    const border = {
        filter : "contrast(0.2)",
        border : "2.5px solid hsl(26, 100%, 55%)"
    }

    function entry(){
        setRemove(false)
    }

    function exit(){
        setRemove(true);
    }

    function prevImage(){
        if(num === "1")
            setnum((4).toString())
        else
            setnum((parseInt(num) - 1).toString())
    }
    function nextImage(){
        if(num === "4")
            setnum((1).toString())
        else
            setnum((parseInt(num) + 1).toString())
    }

    return <>

        <div className="showImages0" style={{display : remove ? "none" : "block"}}>
            <div className="showImages">
                <button id="exitImage" className="i5" onClick={exit}><img src={iconX} className="i5" alt="cross" /></button>
                <button onClick = {prevImage} className="control prev"><img src={prev} alt="" /></button>
                <img className="i1 i5" src={require(`./images/image-product-${num}.jpg`)} alt="" />
                <button onClick={nextImage} className="control next"><img src={next} alt="" /></button>
                <div className="i5">
                    <img style={num === "1"? border : null} onClick={changeImage} className="i2" src={require("./images/image-product-1-thumbnail.jpg")}  alt="1" />
                    <img style={num === "2"? border : null} onClick={changeImage} className="i2" src={require("./images/image-product-2-thumbnail.jpg")}  alt="2" />
                    <img style={num === "3"? border : null} onClick={changeImage} className="i2" src={require("./images/image-product-3-thumbnail.jpg")}  alt="3" />
                    <img style={num === "4"? border : null} onClick={changeImage} className="i2" src={require("./images/image-product-4-thumbnail.jpg")}  alt="4" />
                </div>
            </div>
        </div>
        <div className="hi">
            <img onClick={entry} className="i1" src={require(`./images/image-product-${num}.jpg`)} alt="" />
            <div>
                <img style={num === "1"? border : null} onClick={changeImage} className="i2" src={require("./images/image-product-1-thumbnail.jpg")}  alt="1" />
                <img style={num === "2"? border : null} onClick={changeImage} className="i2" src={require("./images/image-product-2-thumbnail.jpg")}  alt="2" />
                <img style={num === "3"? border : null} onClick={changeImage} className="i2" src={require("./images/image-product-3-thumbnail.jpg")}  alt="3" />
                <img style={num === "4"? border : null} onClick={changeImage} className="i2" src={require("./images/image-product-4-thumbnail.jpg")}  alt="4" />
            </div>
        </div>
    </>
}

export default Images;