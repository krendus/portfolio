import React, { FunctionComponent } from 'react'
import { Container } from './style';
interface IProps {
    header: string;
    showBorder: boolean;
    content: string | JSX.Element;
    range: string;
}
const Timeline:FunctionComponent<IProps> = ({ header, showBorder, range, content}) => {
  return(
      <Container showBorder={showBorder}>
        <span></span>
        <h2>{range}</h2>
        <h3>{header}</h3>
        <p>{content}</p>
      </Container>
  )
}

export default Timeline