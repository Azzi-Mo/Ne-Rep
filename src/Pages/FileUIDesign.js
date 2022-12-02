import { useContext, useEffect, useState } from "react";
import { Dta } from "./GetData";

function UI() {
  const value = useContext(Dta);
  return (
    <>
      <div className="box2_ch1">
        <div className="sec_img_user">
          <section className="img_sec">
            <img className="avatar_url">{value.avatar_url}</img>
          </section>
          <section className="user_sec">{}</section>
        </div>
        <div>
          <p className=""></p>
        </div>
      </div>

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
