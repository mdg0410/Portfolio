import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAbout, updateField } from '../redux/slices/aboutSlice';
import styles from '../styles/about.module.css';
import { ReactComponent as Close } from '../assets/Icons/v-90.svg';
import { ReactComponent as Open } from '../assets/Icons/v.svg';

const About = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAbout);

  return (
    <div className={styles.baseAboutMe} id="About">
      <div className={styles.aboutMySelf}>
        <div className={styles.top}>
          <h2 className={styles.primaryTextAboutMe}>
            About
            Myself
          </h2>
          <p className={styles.secondaryTextAboutMe}>
            Greetings! I am Steven.
            <br />
            Tech enthusiast and passionate developer,
            dedicated to building tomorrow`s solutions today.
            Explore my GitHub for a glimpse into my work.
          </p>
          <div className={styles.socialMediaAboutMe}>
            <div className={styles.suppotingTextAboutMe}>
              <a href="#Contact" className={styles.letsConnect}>LET’S CONNECT</a>
            </div>
            <div className={styles.frame1}>
              <ul className={styles.headerIcons}>
                <li className={styles.smIcons}>
                  <a href="mailto:levoyersteven@gmail.com"><img alt="Gmail" src="https://raw.githubusercontent.com/gauravghongde/social-icons/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/SVG/Black/Gmail_black.svg" /></a>
                </li>
                <li className={styles.smIcons}>
                  <a href="https://www.linkedin.com/in/richard-steven-levoyer-chavez-9b902525b/"><img alt="LinkedIn" src="https://raw.githubusercontent.com/gauravghongde/social-icons/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/SVG/Black/LinkedIN_black.svg" /></a>
                </li>
                <li className={styles.smIcons}>
                  <a href="https://wa.me/tunumerodetelefono/?text=¡Hola!%20😊%20Si%20tienes%20alguna%20pregunta,%20necesitas%20ayuda,%20o%20simplemente%20quieres%20charlar,%20estoy%20aquí%20para%20ayudarte.%20¡No%20dudes%20en%20escribirme%20en%20WhatsApp!%20🚀📱" target="_blank" rel="noreferrer"><img alt="WhastApp" src="https://raw.githubusercontent.com/gauravghongde/social-icons/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/SVG/Black/WhatsApp_black.svg" /></a>
                </li>
                <li className={styles.smIcons}>
                  <a href="https://mdg0410.slack.com/archives/C06HCBB01AN"><img alt="Slack" src="https://raw.githubusercontent.com/gauravghongde/social-icons/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/SVG/Black/Slack_black.svg" /></a>
                </li>
                <li className={styles.smIcons}>
                  <a href="https://github.com/mdg0410"><img alt="GitHub" src="https://raw.githubusercontent.com/gauravghongde/social-icons/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/SVG/Black/Github_black.svg" /></a>
                </li>
              </ul>
            </div>
          </div>
          <a href="https://github.com/mdg0410" className={styles.actionButton}>Get my resume</a>
        </div>
        <ul className={styles.skillList}>
          <li>
            <div className={styles.frameBlock}>
              <div id={styles.frameSkill}>
                <span className={styles.textSkill}>Languages</span>
                <span>
                  <button type="button" onClick={() => dispatch(updateField('languajes'))}>
                    {!isOpen.languajes ? <Open /> : <Close />}
                  </button>
                </span>
                <div className={styles.separator} id="s1" />
              </div>
              {
            isOpen.languajes && (
              <div className={styles.languagesList}>
                <div className={styles.frameList}>
                  <span><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /></span>
                </div>
                <div className={styles.frameList}>
                  <span><img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /></span>
                </div>
                <div className={styles.frameList}>
                  <span><img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /></span>
                </div>
              </div>
            )
            }
            </div>
          </li>
          <li>
            <div className={styles.frameBlock}>
              <div id={styles.frameSkill}>
                <span className={styles.textSkill}>Frameworks</span>
                <span>
                  <button type="button" onClick={() => dispatch(updateField('frameworks'))}>
                    {!isOpen.frameworks ? <Open /> : <Close />}
                  </button>
                </span>
                <div className={styles.separator} id="s1" />
              </div>
              {
            isOpen.frameworks && (
            <div className={styles.languagesList}>
              <div className={styles.frameList}>
                <span><img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /></span>
              </div>
              <div className={styles.frameList}>
                <span><img alt="React Routes" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" /></span>
              </div>
              <div className={styles.frameList}>
                <span><img alt="Redux" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /></span>
              </div>
              <div className={styles.frameList}>
                <span><img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" /></span>
              </div>
            </div>
            )
            }
            </div>
          </li>
          <li>
            <div className={styles.frameBlock}>
              <div id={styles.frameSkill}>
                <span className={styles.textSkill}>Skills</span>
                <span>
                  <button type="button" onClick={() => dispatch(updateField('skills'))}>
                    {!isOpen.skills ? <Open /> : <Close />}
                  </button>
                </span>
                <div className={styles.separator} id="s1" />
              </div>
              {
            isOpen.skills && (
            <div className={styles.languagesList}>
              <div className={styles.frameList}>
                <span><img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" /></span>
              </div>
              <div className={styles.frameList}>
                <span><img alt="Firebase" src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" /></span>
              </div>
              <div className={styles.frameList}>
                <span><img alt="Jest" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" /></span>
              </div>
              <div className={styles.frameList}>
                <span><img alt="Webpack" src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" /></span>
              </div>
            </div>
            )
            }
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
