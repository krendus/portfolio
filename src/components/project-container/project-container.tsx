import React, { FunctionComponent } from 'react';
import {BiLink} from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import styles from './styles.module.css';
interface IProps {
    name: string;
    liveLink: string;
    githubLink: string;
}

const ProjectContainer: FunctionComponent<IProps> = ({name, liveLink, githubLink}) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>  
      <div className={styles.linkContainer}>
          <a href={liveLink}>
            <BiLink />  Visit
          </a>
          <a href={liveLink}>
            <BsGithub />  View Code
          </a>
      </div>
    </div>
  )
}

export default ProjectContainer
