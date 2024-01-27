import React from 'react';
import styles from '../styles/portfolio.module.css';

const Headline = () => (
  <header>
    <div className={styles.headline}>
      <h1 className={styles.primaryTextHeader}>I’m Steven Levoyer nice to see you!</h1>
      <p className={styles.primaryTextBody}>
        I’m a software developer! I can help you build a product , feature or
        website Look
        through some of my work and experience! If you like what you see and have a project you need
        coded, don’t
        hestiate to contact me.
      </p>
      <div className={styles.socialMedia}>
        <div className={styles.supportingText}>
          <a href="#About" className={styles.letsConnect}>LET’S CONNECT</a>
        </div>
        <ul className={styles.headerIcons}>
          <li className={styles.smIcons}><a href="#"><img src="../assets/Icons/twitter.svg" alt="Twitter icon" /></a></li>
          <li className={styles.smIcons}><a href="#"><img src="../assets/Icons/linkedin.svg" alt="Linkedin icon" /></a></li>
          <li className={styles.smIcons}><a href="#"><img src="../assets/Icons/github.svg" alt="Github icon" /></a></li>
        </ul>
      </div>
    </div>
  </header>
);

export default Headline;
