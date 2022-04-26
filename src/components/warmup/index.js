import React from "react"
import classes from "./styles.module.scss"
import { FormattedMessage } from "gatsby-plugin-intl"

const Warmup = ({ id, children }) => (
  <div id={id} className={classes.container}>
    <h2 className={classes.title}>
      <FormattedMessage id="warmup.title" />
    </h2>
    <p className={classes.warmupDescription}>
      <FormattedMessage id="warmup.description" />
    </p>
    <div className={classes.streams}>
      <h2 className={classes.subtitle}>
        <FormattedMessage id="warmup.robsession" />
      </h2>
      {children}
    </div>
    {/* <div className={classes.streams}>
      <a
        href="https://www.youtube.com/watch?v=7ZR2mcbKvys"
        className={classes.button}
      >
        <FormattedMessage id="warmup.call-to-action" />
      </a>
    </div> */}
  </div>
)

export default Warmup
