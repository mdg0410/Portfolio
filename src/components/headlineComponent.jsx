import React from 'react';
import styles from '../styles/headline.module.css';
import { ReactComponent as TwitterIcon } from '../assets/Icons/twitter.svg';
import { ReactComponent as LinkedinIcon } from '../assets/Icons/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/Icons/github.svg';

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
          <li className={styles.smIcons}><a href="https://google.com" alt="twitter"><TwitterIcon /></a></li>
          <li className={styles.smIcons}><a href="#About" alt="linkedin"><LinkedinIcon /></a></li>
          <li className={styles.smIcons}><a href="#Contact" alt="github"><GithubIcon /></a></li>
        </ul>
      </div>
    </div>
  </header>
);

export default Headline;
