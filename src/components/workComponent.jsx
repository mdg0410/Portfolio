/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/slices/modalSlice';

const WorkComponent = ({ work }) => {
  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(openModal(work));
  };

  return (
    <div className="cardWork" id={work.id}>
      <div className="right-block">
        <div className="image">
          <img src={work.image} alt="work------" />
        </div>
      </div>
      <div className="left-block">
        <div className="primary-text-work">
          <h2 className="project-title">{work.title}</h2>
          <div className="frame-2">
            <div className="client">
              <p className="text-p" id="tc1">{work.description[0]}</p>
            </div>
            <div className="counter" />
            <div className="role">
              <p className="text-p" id="tr1">{work.description[1]}</p>
            </div>
            <div className="counter" />
            <div className="year">
              <p className="text-p" id="ty1">{work.description[2]}</p>
            </div>
          </div>
        </div>
        <div className="secondary-text-work">
          <p id="tw1">{work.content}</p>
        </div>
        <div className="tags">
          <ul className="list-tag">
            {work.techno.map((tech) => (
              <li key={tech} className="tag"><a href="https://google.com">{tech}</a></li>
            ))}
          </ul>
        </div>
        <div className="action">
          <button onClick={openModalHandler} id="btn-card" type="button" className="action-button">See Project</button>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
