import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import programmezLogo from "../../images/sponsorsLogo/programmez.svg"

const Media = ({ id }) => {
  return (
    <div id={id} className={classes.container}>
      <h2>
        <FormattedMessage id="media.title" />
      </h2>
      <p className={classes.subtitle}>
        <FormattedMessage id="media.content" />
      </p>
      <div className={classes.mediaLogos}>
        <a href="https://www.programmez.com/">
          <img src={programmezLogo} alt="Programmez" />
        </a>
      </div>
    </div>
  )
}

export default Media
