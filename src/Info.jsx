import React, { useState } from "react";
import cart from  "./images/icon-cart2.svg"

function Info(props){

    const [num ,setNum] = useState(1)

    function addedCart(){
        props.getData(num);
    }


    return <div id="info">
        <h3>SNEAKER COMPANY</h3>
        <h1>Fall Limited Edition <br />Sneakers</h1>

        <p>These low-profile sneakers are your perfect casual wear</p>
        <p>companion. Featuring a durable rubber outer sole. they'll</p>
        <p>withstand everything the weather can offer.</p>

        <h1 className="price">$125.00  <span>50%</span> </h1>
        <h2>%250.00</h2>

        <div className="buttons">
            <div className="items">
                <button onClick={()=>{setNum(num-1 <= 1 ? 1: num-1)}} >-</button>
                <p style={{color:"hsl(220, 13%, 13%)"}}>{num}</p>
                <button onClick={()=>{setNum(num+1)}}>+</button>
            </div>
            <button className="addtocart" onClick={addedCart} ><img src={cart} alt="cart" /> <span> Add to cart </span></button>
        </div>
    </div>
}

export default Info;