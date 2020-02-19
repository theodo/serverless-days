import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import theodoLogo from "../../images/sponsorsLogo/Theodo.svg"
import thundraLogo from "../../images/sponsorsLogo/Thundra.png"
import platformLogo from "../../images/sponsorsLogo/Platformsh.svg"
// import googleLogo from "../../images/sponsorsLogo/Google.svg"
// import awsLogo from "../../images/sponsorsLogo/AWS.svg"
// import microsoftLogo from "../../images/sponsorsLogo/Microsoft.svg"

const Sponsors = ({ id }) => (
  <div id={id} className={classes.container}>
    <h2 className={classes.title}><FormattedMessage id="sponsors.title"/></h2>
    <ol className={classes.sponsors + " " + classes.sponsorsPlatinium}>
      <li>
        <img src={theodoLogo} alt="Theodo" />
      </li>
    </ol>
    {/* 
    <ol className={classes.sponsors + " " + classes.sponsorsGold}>
      <li>
        <img src={googleLogo} alt="Google" />
      </li>
    </ol>
    */}
    <ol className={classes.sponsors + " " + classes.sponsorsSilver}>
      <li>
        <img src={platformLogo} alt="Platform.sh" />
      </li>
    </ol>
    <ol className={classes.sponsors + " " + classes.sponsorsBronze}>
      <li>
        <img src={thundraLogo} alt="Thundra" />
      </li>
    </ol>
    <p className={classes.subtitle}><FormattedMessage id="sponsors.subtitle"/></p>
    <a href="mailto:paris+sponsoring@serverlessdays.io?subject=I wanna support serverless days paris 2020&body=Tell us if you're interested in being one of the 15 sponsors sharing the spotlight during this first Paris edition! We have 4 different packages that you can sign-up for according to your budget and the visibility you wish to have. We would be happy to walk you through the details." className={classes.button}>
      <FormattedMessage id="sponsors.call-to-action" />
    </a>
  </div>
)

export default Sponsors
