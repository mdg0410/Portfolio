import React from 'react';

function about() {
  return (
    <div className="base-about-me" id="About">
      <div className="about-my-self">
        <div className="top">
          <h2 className="primary-text-about-me">
            About
            Myself
          </h2>
          <p className="secondary-text-about-me">
            Hello I’m a software developer! I can help you build a product ,
            feature or website Look through some of my work and experience! If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
          </p>
          <div className="social-media-about-me">
            <div className="suppoting-text-about-me">
              <a href="#Contact" className="lets-connect">LET’S CONNECT</a>
            </div>
            <div className="frame-1">
              <ul className="header-icons">
                <li className="sm-icons"><a href="#" /></li>
                <li className="sm-icons"><a href="#" /></li>
                <li className="sm-icons"><a href="#" /></li>
                <li className="sm-icons"><a href="#" /></li>
                <li className="sm-icons"><a href="#" /></li>
              </ul>
            </div>
          </div>
          <button type="button" className="action-button">Get my resume</button>
        </div>
        <ul className="skill-list">
          <li>
            <div className="frame-block">
              <div id="frame-skill">
                <span className="text-skill">Languages</span>
                <button type="button" className="button-skill" />
                <div className="separator" id="s-1" />
              </div>
              <div className="languages-list">
                <div className="frame-list">
                  <span className="frame-text">javaScript</span>
                </div>
                <div className="frame-list">
                  <span className="frame-text">HTML</span>
                </div>
                <div className="frame-list">
                  <span className="frame-text">CSS</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="frame-block">
              <div id="frame-skill">
                <span className="text-skill">Frameworks</span>
                <button type="button" className="button-skill" />
                <div className="separator" />
              </div>
            </div>
          </li>
          <li>
            <div className="frame-block">
              <div id="frame-skill">
                <span className="text-skill">Skills</span>
                <button type="button" className="button-skill" />
                <div className="separator" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default about;
