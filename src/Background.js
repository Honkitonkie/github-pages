import React from "react";
import url from "./images/kelly-sikkema-paper.jpg";

function Background(props) {
  return (
    <div
      className='h-screen w-full flex justify-center'
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {props.children}
    </div>
  );
}

export default Background;
