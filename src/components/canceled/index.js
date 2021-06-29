import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import classes from "./styles.module.scss"

const Canceled = ({ id }) => {
  const intl = useIntl()

  return (
    <div className={classes.backgroundContainer}>
      <div className={classes.container}>
        <h2>
          <FormattedMessage id="canceled.title" />
        </h2>
        <p>
          <FormattedMessage id="canceled.message" />
        </p>
      </div>
    </div>
  )
}

export default Canceled
