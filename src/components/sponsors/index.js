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
      <p className={classes.subtitle}>Soutenez Serverless Days Paris</p>
    </div>
    <ol className={classes.sponsors + " " + classes.sponsorsPlatinium}>
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
    {/* <ol className={classes.sponsors + " " + classes.sponsorsGold}>
      <li>
        <img src={theodoLogo} alt="Theodo" />
      </li>
      <li>
        <img src={googleLogo} alt="Google" />
      </li>
      <li>
        <img src={awsLogo} alt="Amazone Web Sercices" />
      </li>
      <li>
        <img src={microsoftLogo} alt="Microsoft" />
      </li>
    </ol> */}
    {/* <ol className={classes.sponsors + " " + classes.sponsorsSilver}>
      <li>
        <img src={theodoLogo} alt="Theodo" />
      </li>
      <li>
        <img src={googleLogo} alt="Google" />
      </li>
      <li>
        <img src={awsLogo} alt="Amazone Web Sercices" />
      </li>
      <li>
        <img src={microsoftLogo} alt="Microsoft" />
      </li>
    </ol> */}
    {/* <ol className={classes.sponsors + " " + classes.sponsorsBronze}>
      <li>
        <img src={theodoLogo} alt="Theodo" />
      </li>
      <li>
        <img src={googleLogo} alt="Google" />
      </li>
      <li>
        <img src={awsLogo} alt="Amazone Web Sercices" />
      </li>
      <li>
        <img src={microsoftLogo} alt="Microsoft" />
      </li>
    </ol> */}
    <a href="mailto:paris+sponsoring@serverlessdays.io?subject=I wanna support serverless days paris 2020&body=Tell us if you're interested in being one of the 15 sponsors sharing the spotlight during this first Paris edition! We have 4 different packages that you can sign-up for according to your budget and the visibility you wish to have. We would be happy to walk you through the details." className={classes.button}>devenir sponsor</a>
  </div>
)

export default Sponsors
