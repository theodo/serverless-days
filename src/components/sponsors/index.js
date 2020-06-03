import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import theodoLogo from "../../images/sponsorsLogo/Theodo.svg"

const Sponsors = ({ id }) => (
  <div className={classes.container}>
    <div className={classes.titleContainer}>
      <h2 className={classes.title}>
        <FormattedMessage id="sponsors.title" />
      </h2>
      <p className={classes.subtitle}>
        <FormattedMessage id="sponsors.content" />
      </p>
    </div>
    <div className={classes.logos}>
      <img className={classes.logo} src={theodoLogo} alt="Theodo" />
    </div>
    <a className={classes.callToAction} href="mailto:paris@serverlessdays.io">
      <FormattedMessage id="sponsors.call-to-action" />
    </a>
  </div>
)

export default Sponsors
