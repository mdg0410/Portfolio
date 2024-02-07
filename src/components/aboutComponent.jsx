import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAbout, updateField } from '../redux/slices/aboutSlice';
import styles from '../styles/about.module.css';
import { ReactComponent as JavaScript } from '../assets/Icons/javascript.svg';
import { ReactComponent as Html } from '../assets/Icons/html.svg';
import { ReactComponent as Css } from '../assets/Icons/css.svg';
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
          <button type="button" className={styles.actionButton}>Get my resume</button>
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
                  <span><JavaScript /></span>
                  <span className={styles.frameText}>JavaScript</span>
                </div>
                <div className={styles.frameList}>
                  <span><Html /></span>
                  <span className={styles.frameText}>HTML</span>
                </div>
                <div className={styles.frameList}>
                  <span><Css /></span>
                  <span className={styles.frameText}>CSS</span>
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
                <span><JavaScript /></span>
                <span className={styles.frameText}>React.js</span>
              </div>
              <div className={styles.frameList}>
                <span><Html /></span>
                <span className={styles.frameText}>Bootstrap</span>
              </div>
              <div className={styles.frameList}>
                <span><Css /></span>
                <span className={styles.frameText}>jQuery</span>
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
                <span><JavaScript /></span>
                <span className={styles.frameText}>Trabajo en Equipo</span>
              </div>
              <div className={styles.frameList}>
                <span><Html /></span>
                <span className={styles.frameText}>Resolución de Problemas</span>
              </div>
              <div className={styles.frameList}>
                <span><Css /></span>
                <span className={styles.frameText}>Pensamiento Analítico</span>
              </div>
              <div className={styles.frameList}>
                <span><Html /></span>
                <span className={styles.frameText}>Aprendizaje Continuo</span>
              </div>
              <div className={styles.frameList}>
                <span><Css /></span>
                <span className={styles.frameText}>Adaptabilidad</span>
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
