import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Site Reliability Engineer"],
        autoStart: true,
        loop: false,
        deleteSpeed: Infinity,
      }}
    />
  );
}

export default Type;
