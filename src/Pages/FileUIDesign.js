import { useContext, useEffect, useState } from "react";
import {Dta} from './GetData'
// type value 
// value come to setelemt

function UI() {


  
const value = useContext(Dta)
  return (
    <>
     
     <form onSubmit={sh}>
            <input onChange={(e) => setElemet(e.target.value)}></input>
    
            <button>submit</button>
          </form>

    </>
  );




}
export default UI;


