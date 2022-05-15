import React from 'react';
import Slider from '../slider';
import styles from './styles.module.css';
import profileImage from '../../assets/profile.jpeg';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileImg}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src={profileImage} alt="profile" />
      </div>
      <article>
        <h2 className={styles.header}>About Me</h2>
        <div></div>
        <p className={styles.text}>
        I am a Tech-savvy, focused, and hard-working Developer and motivated to help organizations thrive. I can work under pressure and can communicate ideas. I have good knowledge and experience working with different technologies.
        </p>
      </article>
      <div>
        <h2 className={styles.header}>Skills</h2>
        <div></div>
        <div>
          <Slider name="JavaScript" percent={90} />
          <Slider name="React" percent={85} />
          <Slider name="CSS" percent={95} />
          <Slider name="NodeJS" percent={50} />
          <Slider name="Solidity" percent={60} />
        </div>
      </div>
      <div>
        <h2 className={styles.header}>Hobbies</h2>
        <div></div>
        <button className={styles.button}>Football</button>
        <button className={styles.button}>Game</button>
      </div>
    </div>
  )
}

export default Sidebar