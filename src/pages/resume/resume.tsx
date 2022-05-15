import React from 'react';
import TopNav from '../../components/topnav';
import Sidebar from '../../components/sidebar';
import styles from './styles.module.css';
import { BsGithub, BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import ContactLink from '../../components/contact-link';
import Timeline from '../../components/timeline';
import ProjectContainer from '../../components/project-container';
const Resume = () => {
  return (
      <main className={styles.main}>
        <Sidebar />
        <div className={styles.rightContainer}>
          <TopNav />
          <section>
              <h1 className={styles.name}>SAMUEL LAWAL</h1>
              <h2 className={styles.title}>Frontend Developer</h2>
              <div></div>
              <div>
                <ContactLink Icon={() => <BsGithub />} title="samurai1979" link='https://github.com/samurai1979'/>
                <ContactLink Icon={() => <MdEmail />} title="samuellawal1979@gmail.com" link='mailto:samuellawal1979@gmail.com'/>
                <ContactLink Icon={() => <BsTelephoneFill />} title="09038047151" link='tel:+2349038047151'/>
              </div>
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
          <p className={styles.copyright}>Copyright &copy; 2022</p>
        </div>
    </main>
  )
}

export default Resume;