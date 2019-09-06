import React from "react"
import Typist from 'react-typist';

import {
  FaGithub as Github,
  FaLinkedin,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#b3e5fc" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Anthony.
      </div>
      <div className="h1 code mt-4 mb-3">{'<div'} {<span style = {{color : "#69f0ae"}}>className</span>}=<span style = {{color : "#ffecb3"}}>"C34"</span>></div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        <Typist>
        <span>I'm very much still figuring this out.</span>
        <Typist.Backspace count={38} delay={1000} />
         <span>Just kidding I got this.</span>
         <Typist.Backspace count={24} delay={1000} />
         <span>Check out my projects. More coming soon...</span>
        </Typist>
      </div>
      <div className="h1 code mt-2 mb-3">{"</div>"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://github.com/TonyIzCool" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a className="mr-5 icon" href="https://www.linkedin.com/in/anthony-gil/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a className="mr-5 icon" href="mailto://agil013@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
