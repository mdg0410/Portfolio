/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/slices/modalSlice';
import styles from '../styles/portfolio.module.css';

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
            <h2 id="title-a">{project.title}</h2>
            <button type="button" onClick={onClose}>Cerrar</button>
          </div>
          <div className={styles.frame2}>
            <div className={styles.client}>
              <p className={styles.textP} id="tc-a">{project.description[0]}</p>
            </div>
            <div className={styles.counter} />
            <div className={styles.role}>
              <p className={styles.textP} id="tr-a">{project.description[1]}</p>
            </div>
            <div className={styles.counter} />
            <div className={styles.year}>
              <p className={styles.textP} id="ty-a">{project.description[2]}</p>
            </div>
          </div>
        </div>
        <div className={styles.imgA}>
          {/* <img id="img-aux" src="{project[i].imgURL}" alt="img-aux"> */}
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
              <a href="{project[i].live}" className={styles.btnAux}><span>See Live</span></a>
              <a href="{project[i].source}" className={styles.btnAux}><span>See Source</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
