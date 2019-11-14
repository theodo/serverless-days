import React from "react"
import classes from "./styles.module.scss"
import talkPicture from "../../images/talks.svg"

const CallForPaper = () => (
  <div className={classes.container}>
    <div className={classes.imageContainer}>
      <img alt="" src={talkPicture} />
      <h2 className={classes.title}>Talks</h2>
    </div>
    <div className={classes.informationContainer}>
      <h3>Program building...</h3>
      <p>
        Bonnes pratiques, outils, services, venez partager votre expérience
        de Serverless avec le reste de la communauté ! Soumettez votre sujet
        pour devenir conférencier.
      </p>
      <button>Devenir speaker</button>
    </div>
  </div>
)

export default CallForPaper
