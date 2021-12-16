import React, { useState } from "react";
import ToogleSwitch from "../components/ToogleSwitch";
import iitg from "../assets/iitg.jpg";

const Login = () => {
  const [currLogin, setcurrLogin] = useState("user");
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ToogleSwitch func={setcurrLogin} />
      </div>
      {currLogin == "user" ? (
        <div className="w-full flex flex-row">
          <div className="w-1/2 h-screen" style={{ objectFit: "fill" }}>
            <img src={iitg} alt="" className="w-full h-full" />
          </div>
          <div className="w-1/2">Login User</div>
        </div>
      ) : (
        <div className="w-full flex flex-row">
          <div className="w-1/2">Login Club</div>
          <div className="w-1/2 h-screen" style={{ objectFit: "fill" }}>
            <img src={iitg} alt="" className="w-full h-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
