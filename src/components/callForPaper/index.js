import React from "react"
import classes from "./styles.module.scss"
import talkPicture from "../../images/talks.svg"

const CallForPaper = ({ id }) => (
  <div id={id} className={classes.container}>
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
      <a className={classes.button} href="mailto:paris+talking@serverlessdays.io?subject=I wanna talk at serverless days paris 2020&body=Tell us who you are, what you wanna talk about, why you are legitimate to talk about that and we will get back to you soon :) Thank you very much!" className={classes.button}>Devenir speaker</a>
    </div>
  </div>
)

export default CallForPaper
