import React from "react"
import classes from "./styles.module.scss"
import titleImage from "../../images/titleImage.svg"
const Title = () => (
  <div className={classes.backgroundContainer}>
    <div className={classes.container}>
      <div className={classes.informations}>
        <h1>
          Serverless days
          <br />
          <span className={classes.location}>Paris 2020</span>
        </h1>
        <div className={classes.mobileTitleImageContainer}>
          <img alt="" src={titleImage} />
        </div>
        <h2 className={classes.subtitle}>
          La journée de Conférence dédiée à l’architecture Serverless
        </h2>
        <p className={classes.rendezVous}>
          Rendez-vous le <time dateTime="2020-04-24">24/04/2020</time>
          <br />
          au Pan Piper
        </p>
        <p className={classes.callToAction}>Tenez moi informé</p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className={classes.contactForm}
          action="/thanks/"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="email"
            name="email"
            placeholder="my.email@serverless.com"
            required
          />
          <button type="submit" className={classes.submitButton}>
            Ok
          </button>
        </form>
        {/* <button className={classes.button}>prendre sa place</button> */}
      </div>
      <div className={classes.desktopTitleImageContainer}>
        <img alt="" src={titleImage} />
      </div>
    </div>
  </div>
)

export default Title
