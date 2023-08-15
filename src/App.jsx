import React, { useState } from "react";
import Header from "./Header"
import Main from "./Main";

function App(){
   const [x,setX] = useState(0)
   function getData(data){
      setX(data)
   }
   return <>
        <Header number = {x}/>
        <Main getData = {getData}/>
   </>
}
export default App;