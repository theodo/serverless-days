import React from "react"
import classes from "./styles.module.scss"
import mailLogo from "../../images/mail.svg"
import twitterLogo from "../../images/twitterLogo.svg"
import instaLogo from "../../images/instaLogo.svg"
const Location = ({ id }) => (
  <div id={id} className={classes.container}>
    <h2>Contact</h2>
    <p>Pour plus d’informations contactez notre équipe d’organisateurs</p>
    <div className={classes.address}>
      <div className={classes.email}>
        <img src={mailLogo} alt="" />
        <address>
          <a href="mailto:contac@serverlessdaysfrance.fr">
            contac@serverlessdaysfrance.fr
          </a>
        </address>
      </div>
      <div className={classes.socials}>
        <img src={twitterLogo} alt="Twitter" />
        <img src={instaLogo} alt="Instagram" />
      </div>
    </div>
  </div>
)

export default Location
