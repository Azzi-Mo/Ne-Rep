import { useContext, useEffect, useState } from "react";
import { Dta } from "./GetData";

function UI() {
  const value = useContext(Dta);
  return (
    <>
      <div className="box2_ch1"></div>
      <div className="box2_ch2">
        <div className="space"></div>
      </div>
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
