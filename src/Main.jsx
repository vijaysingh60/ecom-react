import React from "react";
import Images from "./Images";
import Info from "./Info";

function Main(props){
    function getData(data){
        props.getData(data)
    }
    return <div id="main">
        <Images/>
        <Info getData = {getData}/>
    </div>
}

export default Main;