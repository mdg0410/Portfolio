import React from 'react';

function works() {
  return (
    <div className="work" id="Works">
      <div className="card-works" id="card-1">
        <div className="left-block">
          <div className="primary-text-work">
            <h2 className="project-title" id="pt1">Portfolio</h2>
            <div className="frame-2">
              <div className="client">
                <p className="text-p" id="tc1">Portfolio</p>
              </div>
              <div className="counter" />
              <div className="role">
                <p className="text-p" id="tr1">Frot-End</p>
              </div>
              <div className="counter" />
              <div className="year">
                <p className="text-p" id="ty1">2022</p>
              </div>
            </div>
          </div>
          <div className="secondary-text-work">
            <p id="tw1">This project is created mainly to present my skills in building different projects I have worked on.</p>
          </div>
          <div className="tags">
            <ul className="list-tag">
              <li className="tag"><a href="#" className="html">html</a></li>
              <li className="tag"><a href="#" className="css">css</a></li>
              <li className="tag"><a href="#" className="js">javaScript</a></li>
            </ul>
          </div>
          <div className="action">
            <button onClick="opencard(0)" id="btn-card" type="button" className="action-button">See Project</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default works;
