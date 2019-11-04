import React from "react"
import classes from "./styles.module.scss"

const Sponsors = ({ id }) => (
  <div id={id} className={classes.container}>
    <div className={classes.titleContainer}>
      <h2 className={classes.title}>Sponsors</h2>
      <p className={classes.subtitle}>ils nous font confiance</p>
    </div>
    <div className={classes.sponsors}></div>
    <button className={classes.button}>devenir sponsor</button>
  </div>
)

export default Sponsors
