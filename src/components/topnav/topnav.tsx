import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from "./styles.module.css"
const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isWeb = () => !location.pathname.includes("pdf");
  const goToWeb = () => navigate('/');
  const goToDocument = () => navigate('/pdf');
  
  return (
    <nav className={styles.nav}>
      <div className={styles.buttonContainer}>
        {!isWeb() && <button onClick={goToWeb}>Web</button>}
        {isWeb() && <button onClick={goToDocument}>View PDF</button>}
      </div>
    </nav>
  )
}

export default TopNav;