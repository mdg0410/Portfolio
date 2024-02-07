import React from 'react';
import styles from '../styles/headline.module.css';

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
          <a href="#Contact" className={styles.letsConnect}>LET’S CONNECT</a>
        </div>
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
  </header>
);

export default Headline;
