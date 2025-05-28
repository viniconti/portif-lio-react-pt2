import React from 'react'
import './Section2.css'


function Section2() {
    return (
        <>
         <section id="profile">
        <div className="section__pic-container">
        <img src="/imagens/profile-pic.png.jpeg" alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Olá, eu sou</p>
          <h1 className="title">Vinicius Conti</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onclick="window.open('./imagens/resume-example.pdf')"
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onclick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="./imagens/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onclick="location.href='https://www.linkedin.com/feed/'"
            />
            <img
              src="./imagens/github.png"
              alt="My Github profile"
              className="icon"
              onclick="location.href='https://github.com/dashboard'"
            />
          </div>
        </div>
      </section>
        </>
    )
}
export default Section2