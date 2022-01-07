import React, { useState } from "react";
import ToogleSwitch from "../components/ToogleSwitch";
import iitg from "../assets/iitg.jpg";
import logo from "../assets/logo.svg";
import microsoft from "../assets/microsoft.svg";
import MicrosoftLogin from "react-microsoft-login";
import axios from "axios";
axios.defaults.xsrfHeaderName = "x-csrftoken";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const Login = () => {
  const [currLogin, setcurrLogin] = useState("user");

  const authHandler = (error, authData, msalInstance) => {
    // console.log(error, authData, msalInstance);
    if (!error) {
      console.log(authData.accessToken);
      axios({
        method: "post",
        url: "http://localhost:8000/apiLogin/",
        data: {
          token: authData.accessToken,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else console.error(error);
  };
  const demo = () => {
    axios({
      method: "get",
      url: "http://localhost:8000/profile",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
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
                style={{ backgroundColor: "#2F2F2F" }}
              >
                <MicrosoftLogin
                  clientId="51604322-ac4b-4b45-a5d1-d6a8f737038f"
                  authCallback={authHandler}
                  buttonTheme="dark"
                  className="rounded-md h-10"
                />
              </div>
              {/* <button onClick={demo}>abcd</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
