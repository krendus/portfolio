import React, { FunctionComponent } from 'react';
import { Fill } from './style';
import styles from './styles.module.css';

interface ISliderProps {
    name: string;
    percent: number;
}
const Slider: FunctionComponent<ISliderProps> = ({ name, percent }) => {
  return (
    
    <div className={styles.container}>
      <p>{name}</p>
      <div className={styles.slide}>
        <Fill width={percent}>
          <span></span>
        </Fill>
      </div>
    </div>
  )
}

export default Slider
