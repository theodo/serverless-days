import React from "react"
import classes from "./styles.module.scss"
import talkPicture from "../../images/talks.svg"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const CallForPaper = ({ id }) => {
  const intl = useIntl()
  return (
    <div id={id} className={classes.container}>
      <div className={classes.imageContainer}>
        <img alt="" src={talkPicture} />
        <h2 className={classes.title}>
          <FormattedMessage id="call_for_paper.title" />
        </h2>
      </div>
      <div className={classes.informationContainer}>
        <h3>
          <FormattedMessage id="call_for_paper.subtitle" />
        </h3>
        <p>
          <FormattedMessage id="call_for_paper.summary" />
        </p>
        <a
          className={classes.button}
          href="https://sessionize.com/serverlessdays-paris-2023/"
          alt={intl.formatMessage({ id: "call_for_paper.cta.alt" })}
          target="_blank"
        >
          <FormattedMessage id="call_for_paper.cta.content" />
        </a>
      </div>
    </div>
  )
}

export default CallForPaper
