import React from "react"
import "./About.css"

const About = () => {
  return (
    <div id="about" className="about">
      <header className="about-header">
        <h2 className="about-header-text">ABOUT ME</h2>
        <div className="about-header-line"></div>
      </header>
      <main className="main">
        <div className="main-text">
          <h3 className="main-heading">
            I'm <span className="green-text">Patrick Speranza,</span> a Web
            Developer
          </h3>
          <p className="main-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            excepturi similique voluptatem. Reprehenderit delectus officia dicta
            quia obcaecati eos quidem suscipit quis rem? Alias tenetur esse
            quis? Adipisci, voluptatibus fuga? Soluta laboriosam rem fuga
            dolore, dolorum distinctio at illo earum maxime pariatur quae, sequi
            odio
          </p>
          <p className="main-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            praesentium veritatis ex debitis porro reiciendis. Unde natus, quas
            corporis ipsam inventore placeat cum minus sed.
          </p>
        </div>
        <div className="main-contact">
          <div className="main-contact-entry">
            <h6 className="main-contact-key">Name: </h6>
            <p className="main-contact-value">Patrick Speranza</p>
          </div>
          <div className="main-contact-entry">
            <h6 className="main-contact-key">Email: </h6>
            <p className="main-contact-value green-text">
              patrick.m.speranza@gmail.com
            </p>
          </div>

          <div className="main-contact-entry">
            <h6 className="main-contact-key">Age:</h6>
            <p className="main-contact-value">32</p>
          </div>
          <div className="main-contact-entry">
            <h6 className="main-contact-key">From: </h6>
            <p className="main-contact-value">Munster, Indiana</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
