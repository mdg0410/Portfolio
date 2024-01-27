/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/slices/modalSlice';

const Modal = ({ project }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className="card-aux">
      <div className="header-aux">
        <div className="title-aux">
          <h2 id="title-a">{project.title}</h2>
          <button type="button" onClick={onClose}>Cerrar</button>
        </div>
        <div className="frame-2">
          <div className="client">
            <p className="text-p" id="tc-a">{project.description[0]}</p>
          </div>
          <div className="counter" />
          <div className="role">
            <p className="text-p" id="tr-a">{project.description[1]}</p>
          </div>
          <div className="counter" />
          <div className="year">
            <p className="text-p" id="ty-a">{project.description[2]}</p>
          </div>
        </div>
      </div>
      <div className="img-a">
        {/* <img id="img-aux" src="{project[i].imgURL}" alt="img-aux"> */}
      </div>
      <div className="left-block-aux">
        <div className="secondary-text-work-aux">
          <p id="tw-a">{project.content}</p>
        </div>
        <div className="rigth-aux">
          <ul className="list-aux">
            {project.techno.map((tech) => (
              <li key={tech} className="tag"><a href="https://google.com">{tech}</a></li>
            ))}
          </ul>
          <div className="line-aux" />
          <div className="container-btn-aux">
            <a href="{project[i].live}" className="btn-aux"><span>See Live</span></a>
            <a href="{project[i].source}" className="btn-aux"><span>See Source</span></a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Modal;
