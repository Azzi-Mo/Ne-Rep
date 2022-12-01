import { createContext,useState } from "react";
import UI from "./FileUIDesign";
import "./GetData.scss";
export const Dta = createContext();
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
      <section style={{ height: window.innerHeight }} className="sec_contain">
        <Dta.Provider value={urle}>
          <div className="Box">

            <section className="ch_box1">
              <form onSubmit={sh}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder="search githup username" onChange={(e) => setElemet(e.target.value)}></input>

                <button>Search</button>
              </form>
            </section>

            <section className="ch_box2">
              <UI />
            </section>

            
          </div>
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
