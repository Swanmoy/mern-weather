import React from "react";
import me from "../images/me.jpg";

export default function AboutUs() {
  return (
    <>
      <div class='about-container'>
        <div class='about-container-left'>
          <img alt='img' src={me} id='aboutimg' />
        </div>
        <div class='about-container-right'>
          <p>Welcome to the Weather app</p>
          <h1>
            Hi, My name is Swanmoy Nag and I am a Competitive Coder, Full Stack
            Developer and a ML Developer
          </h1>
        </div>
      </div>
    </>
  );
}
