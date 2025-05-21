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
            <img src="/assets/img/logo/welgategropulogo.webp"/>
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default Preloader





