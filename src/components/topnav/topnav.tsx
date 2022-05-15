import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from "./styles.module.css";
import CV from '../../assets/CV.pdf'
const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isWeb = () => !location.pathname.includes("pdf");
  const goToWeb = () => navigate('/');
  const goToDocument = () => navigate('/pdf');
  
  return (
    <nav className={styles.nav}>
      <div className={styles.buttonContainer}>
        {!isWeb() && <a href={CV} download="Samuel_Lawal_CV.pdf">Download</a>}
        {!isWeb() && <button onClick={goToWeb}>View Web</button>}
        {isWeb() && <button onClick={goToDocument}>View PDF</button>}
      </div>
    </nav>
  )
}

export default TopNav;