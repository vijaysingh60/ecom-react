import React, { useState } from "react";
import cart from  "./images/icon-cart.svg"
import bin from "./images/icon-delete.svg"
import iconX from "./images/icon-plus.svg"

let x =0;
function Header(props){
    
    const [num,setNum] = useState(0)
    const [menuClick,setmenuClick] = useState(false)
    if(x !== props.number){
        setNum(props.number)
        x = props.number
    }

    const [shift,setShift] = useState(0);

    function moveBlock(event){
        let x =event.target.value
        setShift(x)
    }


    function showCart(){
        let a = document.querySelector(".cart");
        if(a.style.display === "none"){
            a.style.display = "block"
        }else{
            a.style.display = "none"
        }
    }

    function emptyCart(){
        setNum(0)
    }
    function menuClicked(){
        setmenuClick(true)
    }
    function menuClicked1(){
        setmenuClick(false)
    }

    return <div>
        <div className="menu" style={{display : menuClick ? "block" : "none"}}>
            <div className="menu1">
                <button id="exitImage" onClick={menuClicked1}><img src={iconX} alt="cross" /></button>
                <ul>
                    <li>Collection</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <ul className="nav">
            <li className="more" onClick={menuClicked}><img src={require("./images/more.png")} alt="" /></li>
            <li className="logo">sneakers</li>
            <li onClick={moveBlock} className="hh" style={{color : shift === 0 ? "hsl(220, 13%, 13%)":"hsl(220, 14%, 75%)"}} value={0} >Collections</li>
            <li onClick={moveBlock} className="hh" style={{color : shift === 1 ? "hsl(220, 13%, 13%)":"hsl(220, 14%, 75%)"}} value={1} >Men</li>
            <li onClick={moveBlock} className="hh" style={{color : shift === 2 ? "hsl(220, 13%, 13%)":"hsl(220, 14%, 75%)"}} value={2} >Women</li>
            <li onClick={moveBlock} className="hh" style={{color : shift === 3 ? "hsl(220, 13%, 13%)":"hsl(220, 14%, 75%)"}} value={3} >About</li>
            <li onClick={moveBlock} className="hh" style={{color : shift === 4 ? "hsl(220, 13%, 13%)":"hsl(220, 14%, 75%)"}} value={4} >Contact</li>
            <li className="icons" onClick={showCart}><img  src={cart} alt="cart" /></li>
            <li className="avatar"><img src={require("./images/image-avatar.png")}alt="avatar" /></li>
        </ul>
        <div style={{marginLeft : `${340 + shift*90}px`,display : "none"}} className="block"></div>
        <div className="cart">
            <h2>Cart</h2>
            <hr />
            <p style={{display : num === 0?"block" : "none"}}>Your cart is empty</p>
            <div style={{display : num !== 0?"block" : "none"}} className="purchase">
                <img src={require("./images/image-product-1-thumbnail.jpg")} alt="" />
                <button className="bin" onClick={emptyCart}><img src={bin} alt="" /></button>
                <h3>Fall Limited Edition Sneakers <br /> $125.00 x {num}  <span> ${125*num}</span></h3>
                <button className="checkout" onClick={showCart}>Checkout</button>
            </div>
        </div>
        <hr className="nhr" />
    </div>
}

export default Header;