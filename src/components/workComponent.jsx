/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { openModal, selectModal } from '../redux/slices/modalSlice';
import styles from '../styles/work.module.css';
import { ReactComponent as Point } from '../assets/Icons/point.svg';

const WorkComponent = ({ work }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectModal);

  const openModalHandler = () => {
    dispatch(openModal(work));
  };

  return (
    <div className={styles.cardWork}>
      <div className={styles.rightBlock}>
        { isOpen ? null : (
          <Carousel>
            {work.img.map((img) => (
              <Carousel.Item key={img.id} className="carousel-item">
                <img className="d-block w-100" src={img.url} alt={img.alt} />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
      <div className={styles.leftBlock}>
        <div className={styles.primaryTextWork}>
          <h2 className={styles.projectTitle}>{work.title}</h2>
          <div className={styles.frame2}>
            <div className="client">
              <p className="text-p" id="tc1">{work.description[0]}</p>
            </div>
            <Point />
            <div className="role">
              <p className="text-p" id="tr1">{work.description[1]}</p>
            </div>
            <Point />
            <div className="year">
              <p className="text-p" id="ty1">{work.description[2]}</p>
            </div>
          </div>
        </div>
        <div className={styles.descriptionWork}>
          <p id="tw1">{work.content}</p>
        </div>
        <div className={styles.tags}>
          <ul className={styles.listTag}>
            {work.techno.map((tech) => (
              <li key={tech} className="tag">{tech}</li>
            ))}
          </ul>
        </div>
        <div className={styles.action}>
          <button onClick={openModalHandler} id="btn-card" type="button" className={styles.actionButton}>See Project</button>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
