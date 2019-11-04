import React from "react"
import classes from "./styles.module.scss"

const CallToAction = () => (
  <div className={classes.container}>
    <p className={classes.text}>
      Venez assister à une journée de conférence avec des experts, networker et
      découvrir de nouveaux sujets …
    </p>
    <button className={classes.button}>prendre sa place</button>
  </div>
)

export default CallToAction
