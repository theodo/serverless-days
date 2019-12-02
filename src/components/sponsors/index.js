import React from "react"
import classes from "./styles.module.scss"
import theodoLogo from "../../images/sponsorsLogo/Theodo.svg"
import googleLogo from "../../images/sponsorsLogo/Google.svg"
import awsLogo from "../../images/sponsorsLogo/AWS.svg"
import microsoftLogo from "../../images/sponsorsLogo/Microsoft.svg"

const Sponsors = ({ id }) => (
  <div id={id} className={classes.container}>
    <div className={classes.titleContainer}>
      <h2 className={classes.title}>Sponsors</h2>
      {/* <p className={classes.subtitle}>ils nous font confiance</p> */}
      <p className={classes.subtitle}>Soutenez Serverless Days Paris</p>
    </div>
    <ol className={classes.sponsors}>
      <li>
        <img src={theodoLogo} alt="Theodo" />
      </li>
      {/* <li>
        <img src={googleLogo} alt="Google" />
      </li>
      <li>
        <img src={awsLogo} alt="Amazone Web Sercices" />
      </li>
      <li>
        <img src={microsoftLogo} alt="Microsoft" />
      </li> */}
    </ol>
    <a href="mailto:paris+sponsoring@serverlessdays.io?subject=I wanna support serverless days paris 2020" className={classes.button}>devenir sponsor</a>
  </div>
)

export default Sponsors
