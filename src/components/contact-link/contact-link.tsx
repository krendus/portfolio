import React, { FunctionComponent } from 'react'
import styles from './styles.module.css';
interface IProps {
    link: string;
    Icon:  FunctionComponent;
    title: string;
}
const ContactLink:FunctionComponent<IProps> = ({link, Icon, title}) => {
  return (
    <a href={link} className={styles.link}>
        <span className={styles.icon}>
          <Icon />
        </span>
        <span>{title}</span>
    </a>

  )
}

export default ContactLink;
