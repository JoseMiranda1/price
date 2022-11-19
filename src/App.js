
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
 
    Axios({
      url: "https://www.cedicor.com.ar/productos?codigo=941004010094&ub=0",
    })
      .then((response) => {
        debugger;
        procesarHtml(response.data);
      })
      .catch((error) => {
        console.log(error);
      });


  return (
    <div className="App">
      <div>
       
      </div>
    </div>
  );

  }
function procesarHtml(texto){
console.log(texto.length);
return ""
}

export default App;