import React from 'react';
import TopNav from '../../components/topnav';
import Sidebar from '../../components/sidebar';
import styles from './styles.module.css';
import { BsGithub, BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import ContactLink from '../../components/contact-link';
import Timeline from '../../components/timeline';
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
            <h2 className={styles.header}>WORK EXPERIENCE</h2>
            <div></div>
            <div>
              <Timeline 
                range="25TH November 2021 - 25TH November 2021"
                showBorder={true}
                header="Worked ar"
                content='lorem ipsum sdf ksdfj  jdfjdf jsdfj jsdjfjdf jsdjfjdf jsdjfj jsdfuadse sdifue sdfpwaeivi isaiit iiwiaeiioo isdfosdfo osidfoa oadfj '
              />
            </div>
          </section>
        </div>
    </main>
  )
}

export default Resume;