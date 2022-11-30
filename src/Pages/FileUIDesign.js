import { useContext, useEffect, useState } from "react";
import {Dta} from './GetData'

function UI() {


  
const value = useContext(Dta)
  return (
    <>
     
       <h1>{value.login}</h1>

    </>
  );




}
export default UI;



// function TestD()
// {
//   const value = useContext(Dta)
//   return (
//     <>

//      <h1>hi {value.title}</h1>

//     </>
//   )
// }
// export default TestD
