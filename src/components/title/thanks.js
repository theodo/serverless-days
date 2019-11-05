import React from "react"
import classes from "./styles.module.scss"
import titleImage from "../../images/titleImage.svg"
const Title = () => (
  <div className={classes.container}>
    <div className={classes.informations}>
      <h1>
        Serverless days
        <br />
        <span className={classes.location}>Paris 2019</span>
      </h1>
      <h2 className={classes.subtitle}>
        La journée de Conférence dédiée à l’architecture Serverless
      </h2>
      <p className={classes.rendezVous}>
        Rendez-vous le <time dateTime="2020-04-24">24/04/2020</time>
        <br />
        (lieu à déterminer)
      </p>
      <p className={classes.callToAction}>
        On vous tiens informé dés que l'on a du nouveau =)
      </p>
    </div>
    <div className={classes.titleImageContainer}>
      <img alt="" src={titleImage} />
    </div>
  </div>
)

export default Title
