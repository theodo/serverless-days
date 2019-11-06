import React from "react"
import classes from "./styles.module.scss"
import mailLogo from "../../images/mail.svg"

const Location = ({ id }) => (
  <div id={id} className={classes.container}>
    <h2>Contact</h2>
    <p>Pour plus d’informations contactez notre équipe d’organisateurs</p>
    <div className={classes.address}>
      <img src={mailLogo} alt="" />
      <address>
        <a href="mailto:contac@serverlessdaysfrance.fr">
          contac@serverlessdaysfrance.fr
        </a>
      </address>
    </div>
  </div>
)

export default Location
