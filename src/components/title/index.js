import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
// import Tickets from "../tickets"

const Title = () => {
  return (
    <div className={classes.container}>
      <div className={classes.informations}>
        <h1 className={classes.title}>
          <FormattedMessage id="title.title" />
          <br />
          <span className={classes.location}>
            <FormattedMessage id="title.location-year" />
          </span>
        </h1>
        <h2 className={classes.subtitle}>
          <FormattedMessage id="title.subtitle" />
        </h2>
      </div>
      {/* <div className={classes.countdown}>
        <Tickets />
      </div> */}
    </div>
  )
}

export default Title
