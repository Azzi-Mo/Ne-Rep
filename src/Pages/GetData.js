import { createContext, useEffect, useState } from "react";
import UI from "./FileUIDesign";
function GetData() {
  const [elemet, setElemet] = useState("");
  const [urle, setUrle] = useState("");

  const sh = (e) => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${elemet}`.replace(/ /g, ""))
      .then((res) => res.json())
      .then((data) => {
        setUrle(data);
      });
  };

  return (
    <>
      <section>
        <Dta.Provider value={urle}>
          <form onSubmit={sh}>
            <input onChange={(e) => setElemet(e.target.value)}></input>

            <button>submit</button>
          </form>

          <UI />
        </Dta.Provider>
      </section>
    </>
  );
}
export default GetData;

// import TestD from "./FileUIDesign"
// export const Dta = createContext()

// function Main()
// {
//     const [prd , setProd] = useState({title:'prod1'})

//     return(
//         <>

//           <Dta.Provider value={prd}>

//             <TestD/>

//           </Dta.Provider>

//         </>
//     )

// }
// export default Main
