import React, { useState } from "react";
import "./Authenticate.css";
import Signup from "./Signup";
import Login from "./Login";
const Authentication = () => {
  const [rotate, setrotate] = useState(false)
  
  
  const handlesignup = () => {
    setrotate(!rotate)
  };
  return (
    <section className="flex justify-center items-center h-[100vh]">
      <div className="flip-card">
        <div className={`flip-card-inner ${rotate ? "rotate" : ""}`}>
          <div className="flip-card-front">
            <Login handlesignup={handlesignup} />
          </div>
          <div className="flip-card-back">
            <Signup handlesignup={handlesignup} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
