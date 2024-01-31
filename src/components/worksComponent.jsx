import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWorks, renderprojects } from '../redux/slices/worksSlice';
import db from '../db/proyects';
import Work from './workComponent';
import { selectModal } from '../redux/slices/modalSlice';
import Modal from './modalComponent';
import styles from '../styles/work.module.css';

const Works = () => {
  const dispatch = useDispatch();
  const works = useSelector(selectWorks);
  const { isOpen, project } = useSelector(selectModal);

  useEffect(() => {
    dispatch(renderprojects(db));
  }, [dispatch]);

  return (
    <div className={styles.work}>
      {works.map((work) => (
        <Work key={work.id} work={work} />
      ))}
      {isOpen && <Modal project={project} />}
    </div>
  );
};

export default Works;
