/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { closeModal } from '../redux/slices/modalSlice';
import styles from '../styles/work.module.css';
import { ReactComponent as Point } from '../assets/Icons/point.svg';
import { ReactComponent as CloseButton } from '../assets/Icons/btn-close-black.svg';
import { ReactComponent as Live } from '../assets/Icons/live-color.svg';
import { ReactComponent as Github } from '../assets/Icons/github-color.svg';

const Modal = ({ project }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardAux}>
        <div className={styles.headerAux}>
          <div className={styles.titleAux}>
            <h2 className={styles.titleA}>{project.title}</h2>
            <button alt="closeButton" type="button" onClick={onClose}>
              <CloseButton />
            </button>
          </div>
          <div className={styles.frame2}>
            <div className={styles.client}>
              <p className={styles.textP} id="tc-a">{project.description[0]}</p>
            </div>
            <Point />
            <div className={styles.role}>
              <p className={styles.textP} id="tr-a">{project.description[1]}</p>
            </div>
            <Point />
            <div className={styles.year}>
              <p className={styles.textP} id="ty-a">{project.description[2]}</p>
            </div>
          </div>
        </div>
        <div className={styles.imgA}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="https://www.esdesignbarcelona.com/sites/default/files/img/6_pasos_para_crear_un_portfolio_digital_y_todo_lo_que_debe_incluir_2.png" alt="img1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-14936128.jpg&fm=jpg" alt="img1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://www.oberlo.com/media/1631547010-portfolio4.png" alt="img1" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.leftBlockAux}>
          <div className={styles.secondaryTextWorkAux}>
            <p id="tw-a">{project.content}</p>
          </div>
          <div className={styles.rightAux}>
            <ul className={styles.listAux}>
              {project.techno.map((tech) => (
                <li key={tech} className={styles.tag}><a href="https://google.com">{tech}</a></li>
              ))}
            </ul>
            <div className={styles.lineAux} />
            <div className={styles.containerBtnAux}>
              <a href={project.live} className={styles.btnAux}>
                <Live />
                <span>See Live</span>
              </a>
              <a href={project.source} className={styles.btnAux}>
                <Github />
                <span>See Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
