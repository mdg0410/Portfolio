import React from 'react';
import styles from '../styles/portfolio.module.css';

const about = () => (
  <div className={styles.baseAboutMe} id="About">
    <div className={styles.aboutMySelf}>
      <div className={styles.top}>
        <h2 className={styles.primaryTextAboutMe}>
          About
          Myself
        </h2>
        <p className={styles.secondaryTextAboutMe}>
          Hello I’m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don’t hestiate to contact me.
        </p>
        <div className={styles.socialMediaAboutMe}>
          <div className={styles.suppotingTextAboutMe}>
            <a href="#Contact" className={styles.letsConnect}>LET’S CONNECT</a>
          </div>
          <div className={styles.frame1}>
            <ul className={styles.headerIcons}>
              <li className={styles.smIcons}>1</li>
              <li className={styles.smIcons}>1</li>
              <li className={styles.smIcons}>1</li>
            </ul>
          </div>
        </div>
        <button type="button" className={styles.actionButton}>Get my resume</button>
      </div>
      <ul className={styles.skillList}>
        <li>
          <div className={styles.frameBlock}>
            <div id="frameSkill">
              <span className={styles.textSkill}>Languages</span>
              {/* <button type="button" className={styles.buttonSkill} /> */}
              <div className={styles.separator} id="s1" />
            </div>
            <div className={styles.languagesList}>
              <div className={styles.frameList}>
                <span className={styles.frameText}>javaScript</span>
              </div>
              <div className={styles.frameList}>
                <span className={styles.frameText}>HTML</span>
              </div>
              <div className={styles.frameList}>
                <span className={styles.frameText}>CSS</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.frameBlock}>
            <div id="frameSkill">
              <span className={styles.textSkill}>Frameworks</span>
              {/* <button type="button" className={styles.buttonSkill} /> */}
              <div className={styles.separator} />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.frameBlock}>
            <div id="frameSkill">
              <span className={styles.textSkill}>Skills</span>
              {/* <button type="button" className={styles.buttonSkill} /> */}
              <div className={styles.separator} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default about;
