import React, { useState } from "react";
import ToogleSwitch from "../components/ToogleSwitch";
import iitg from "../assets/iitg.jpg";
import logo from "../assets/logo.svg";
import microsoft from "../assets/microsoft.svg";

const Login = () => {
  const [currLogin, setcurrLogin] = useState("user");
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ToogleSwitch func={setcurrLogin} />
      </div>
      <div
        className={`w-full flex ${
          currLogin === "user" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="w-1/2 h-screen" style={{ objectFit: "fill" }}>
          <img src={iitg} alt="" className="w-full h-full" />
        </div>
        <div className="w-1/2 flex flex-row justify-center">
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="w-1/2 flex flex-col items-center rounded-lg border-stone-300 px-4 py-2"
              style={{ borderWidth: 1 }}
            >
              <div className="flex flex-row gap-2 self-start">
                <img src={logo} alt="" className="w-2/5" />
                <p className="text-4xl self-center font-normal">Login</p>
              </div>
              <p className="text-sm pt-3 font-medium self-start">Email</p>
              <input
                type="email"
                name="email"
                className="mx-2 w-full h-10 focus:outline-none border-slate-200 rounded-md mt-2 text-sm px-3"
                style={{ borderWidth: 1 }}
              />
              <p className="text-sm pt-3 font-medium self-start">Password</p>
              <input
                type="password"
                name="password"
                className="mx-2 w-full h-10 focus:outline-none border-slate-200 rounded-md mt-2 text-sm px-3"
                style={{ borderWidth: 1 }}
              />
              <div className="flex flex-row self-start mt-2">
                <input
                  type="checkbox"
                  name="remember"
                  id=""
                  className="accent-orange-800 mt-1 mr-2"
                />
                <p className="self-center text-sm">Remember me</p>
                <p
                  className="text-sm self-center absolute text-blue-600 cursor-pointer"
                  style={{ right: "13.9%" }}
                >
                  Forgot password?
                </p>
              </div>
              <div
                className="w-full h-10 rounded-md mb-2.5 mt-4 text-white text-center py-1.5"
                style={{ backgroundColor: "#32a0da" }}
              >
                Login Now
              </div>
              <div
                className="w-full h-10 rounded-md my-2.5 flex flex-row justify-center"
                style={{ backgroundColor: "#2d3748" }}
              >
                <img src={microsoft} alt="" />
                <p className="text-white py-1.5 pl-1"> sign-in with outlook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
