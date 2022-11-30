import { createContext, useEffect, useState } from "react"
import UI from './FileUIDesign'
export const Dta = createContext()
function GetData()
{


    const [elemet, setElemet] = useState("");
    const [urle, setUrle] = useState("");
    
    const sh = (e) => {
      e.preventDefault();
    
      fetch(`https://api.github.com/users/${elemet}`.replace(/ /g, ""))
      .then((res) => res.json())
      .then((data) => {
        setUrle(data)
  
      });
    };  
  

 

    return (
        <>
            <section>

              <Dta.Provider value={urle}>

              <UI/>


              </Dta.Provider>
            </section>
        </>
      );
    
}
export default GetData