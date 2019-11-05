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
      <h3>Program to be announced</h3>
      <p>
        We are still looking for people to present their talks . If you want to
        share your experiences around Serverless architecture apply for a talk
        and become a speaker
      </p>
      <button>Devenir speaker</button>
    </div>
  </div>
)

export default CallForPaper
