import React from "react"
import classes from "./styles.module.scss"

const Title = () => (
  <div className={classes.container}>
    <h1>
      Serverless days
      <br />
      <span className={classes.location}>Paris 2019</span>
    </h1>
    <h2 className={classes.subtitle}>
      La journée de Conférence dédiée à l’architecture Serverless
    </h2>
    <p className={classes.rendezVous}>Rendez-vous TBD</p>
    {/* <button className={classes.button}>prendre sa place</button> */}
  </div>
)

export default Title
