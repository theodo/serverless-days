import React from "react"
import classes from "./styles.module.scss"
import { FormattedMessage } from "gatsby-plugin-intl"

const Streams = ({ id }) => (
  <div id={id} className={classes.container}>
    <h2 className={classes.title}>
      <FormattedMessage id="streams.title" />
    </h2>
    <div className={classes.streams}>
      <div className={classes.embedContainer}>
        <iframe
          src="https://www.youtube-nocookie.com/embed/w_7dz77P9DE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p className={classes.streamDesctription}>
        <FormattedMessage id="streams.description" />
      </p>
      <p className={classes.callToAction}>
        <FormattedMessage
          id="streams.callToAction"
          values={{
            mailLink: (
              <a href="mailto:paris@serverless.io">paris@serverless.io</a>
            ),
          }}
        />
      </p>
    </div>
  </div>
)

export default Streams
