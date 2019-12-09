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
      <h3>Call for speakers running...</h3>
      <p>
        Bonnes pratiques, outils, services, venez partager votre expérience
        de Serverless avec le reste de la communauté ! Soumettez votre sujet
        pour devenir conférencier sur notre Call for Speakers.
      </p>
      <a className={classes.button} href="https://www.papercall.io/serverlessdaysparis2020" className={classes.button} alt="Lien vers le call for speakers">Postuler au CFP</a>
    </div>
  </div>
)

export default CallForPaper
