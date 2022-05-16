import React, { useState } from 'react';
import TopNav from '../../components/topnav';
import Sidebar from '../../components/sidebar';
import styles from './styles.module.css';
import sidebarStyles from '../../components/sidebar/styles.module.css';
import { BsGithub, BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import ContactLink from '../../components/contact-link';
import Timeline from '../../components/timeline';
import ProjectContainer from '../../components/project-container';
import chessGIF from '../../assets/chess.gif';
import profileImage from '../../assets/profile.jpeg';
import Slider from '../../components/slider';
const Resume = () => {
  const [showModal, setShowModal] = useState(false)
  return (
      <main className={styles.main}>
        <Sidebar showModal={setShowModal} />
        <div className={styles.rightContainer}>
          <TopNav />
          <section>
            <div className={`${sidebarStyles.profileImg} ${styles.profileImg}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img src={profileImage} alt="profile" />
            </div>
            <h1 className={styles.name}>SAMUEL LAWAL</h1>
            <h2 className={styles.title}>Frontend Developer</h2>
            <div></div>
            <p className={styles.about}>I am a Tech-savvy, focused, and hard-working Developer and motivated to help organizations thrive. I can work under pressure and can communicate ideas. I have good knowledge and experience working with different technologies.</p>
            <div>
              <ContactLink Icon={() => <BsGithub />} title="samurai1979" link='https://github.com/samurai1979'/>
              <ContactLink Icon={() => <MdEmail />} title="samuellawal1979@gmail.com" link='mailto:samuellawal1979@gmail.com'/>
              <ContactLink Icon={() => <BsTelephoneFill />} title="09038047151" link='tel:+2349038047151'/>
            </div>
          </section>
          <section className={styles.skills}>
            <h2 className={styles.header}>SKILLS</h2>
            <div></div>
            <Slider name="JavaScript" percent={90} />
            <Slider name="TypeScript" percent={80} />
            <Slider name="React" percent={85} />
            <Slider name="CSS" percent={95} />
            <Slider name="Web3.js" percent={70} />
            <Slider name="NodeJS" percent={50} />
            <Slider name="Solidity" percent={60} />
          </section>
          <section>
            <h2 className={styles.header}>PROJECTS</h2>
            <div></div>
            <div>
              <ProjectContainer name='Country Finder' liveLink='https://country-getter.netlify.app/' githubLink='https://github.com/samurai1979/country-finder/'/>
              <ProjectContainer name='Zuri Chat' liveLink='https://zuri.chat/' githubLink='https://github.com/zurichat/'/>
              <ProjectContainer name='Timart E-Commerce' liveLink='https://timart.com.ng/' githubLink='https://github.com/samurai1979/'/>
            </div>
          </section>
          <section>
            <h2 className={styles.header}>WORK EXPERIENCE</h2>
            <div></div>
            <div>
              <Timeline 
                range="December 2021 -  Till-date"
                showBorder={true}
                header="Timart - Frontend Engineer"
                content='Built different E-commerce web applications with React Typescript'
              />
              <Timeline 
                range="August 2021 - October 2021"
                showBorder={true}
                header="HNG Internship 8.0 - Intern"
                content='Frontend Engineer(React) worked on zuri.chat and also made it as a finalist'
              />
              <Timeline 
                range="March 2021 - June 2021"
                showBorder={false}
                header="Zuri Internship - Intern"
                content='I learnt Data structure and Algorithms and Resposive Web Design'
              />
            </div>
          </section>
          <section>
            <h2 className={styles.header}>CERTIFICATES</h2>
            <div></div>
            <div>
              <Timeline 
                range="JS algorithms and data structure"
                showBorder={true}
                header="FreeCodeCamp"
                content={<a href="https://www.freecodecamp.org/certification/samurai1/javascript-algorithms-and-data-structures">FreeCodeCamp JavaScript algorithms and data structure certificate</a>}
              />
              <Timeline 
                range="Javascript Certificate"
                showBorder={false}
                header="HackerRank"
                content={<a href='https://www.hackerrank.com/certificates/1318086d4fc9 '>JavaScript HackerRank Certificate</a>}
              />
            </div>
          </section>
          <section className={styles.hobbies}>
            <h2 className={styles.header}>HOBBIES</h2>
            <div></div>
            <button className={sidebarStyles.button} onClick={() => setShowModal(true)}>Chess</button>
          </section>
          <p className={styles.copyright}>Copyright &copy; 2022</p>
        </div>
        {
          showModal && (
            <div className={styles.modal} onClick={() => setShowModal(false)}>
              <p>Click anywhere to close</p>
              <img src={chessGIF} alt="" />
            </div>
          )
        }
    </main>
  )
}

export default Resume;