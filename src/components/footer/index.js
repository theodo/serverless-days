import React from "react"
import classes from "./styles.module.scss"
import logoBAM from "../../images/BAM.webp"

const Footer = () => (
  <footer className={classes.footer}>
    <p>Designed by BAM</p>
    <img src={logoBAM} alt="BAM" />
  </footer>
)

export default Footer
