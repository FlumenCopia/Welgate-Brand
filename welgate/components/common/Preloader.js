"use client";
import { useEffect, useState } from "react";

function Preloader() {

  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  
  return (
    <>
      {active ? (
        <div id="preloader">
            <img src="/assets/img/icons/welgate-logo2-removebg-preview-removebg-preview.png"/>
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default Preloader





