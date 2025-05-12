import React from 'react';
import styles from "./Header.module.scss";
import logo from "../../assets/img/pokemon-logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
     <img className={styles.imgLogo} src={logo} alt="logo" /> 
    </header>
  )
}

export default Header
