import React from "react";

const ToogleSwitch = (props) => {
  const toogleCurr = (id) => {
    const ele1 = document.getElementById("toogle-1");
    const ele2 = document.getElementById("toogle-2");
    if (id === "toogle-1") {
      ele1.classList.remove("bg-white");
      ele1.classList.remove("text-sky-500");
      ele1.classList.add("bg-sky-500");
      ele1.classList.add("text-white");
      ele2.classList.add("bg-white");
      ele2.classList.add("text-sky-500");
      ele2.classList.remove("bg-sky-500");
      ele2.classList.remove("text-white");
      props.func("club");
    } else {
      ele1.classList.add("bg-white");
      ele1.classList.add("text-sky-500");
      ele1.classList.remove("bg-sky-500");
      ele1.classList.remove("text-white");
      ele2.classList.remove("bg-white");
      ele2.classList.remove("text-sky-500");
      ele2.classList.add("bg-sky-500");
      ele2.classList.add("text-white");
      props.func("user");
    }
  };
  return (
    <div className="flex flex-row h-16 w-56 rounded-full">
      <div
        onClick={() => toogleCurr("toogle-1")}
        className="bg-white rounded-l-full text-center text-2xl py-3 text-sky-500 w-1/2 cursor-pointer"
        id="toogle-1"
      >
        Club
      </div>
      <div
        onClick={() => toogleCurr("toogle-2")}
        className="bg-sky-500 rounded-r-full text-center text-2xl py-3 text-white w-1/2 cursor-pointer"
        id="toogle-2"
      >
        User
      </div>
    </div>
  );
};

export default ToogleSwitch;
