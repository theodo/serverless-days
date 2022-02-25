import React from "react"
import classes from "./styles.module.scss"
import { FormattedMessage } from "gatsby-plugin-intl"

const Streams = ({ id }) => (
  <div id={id} className={classes.container}>
    <h2 className={classes.title}>
      <FormattedMessage id="streams.title" />
    </h2>
    <p className={classes.streamDesctription}>
      <FormattedMessage id="streams.description" />
    </p>
    <div className={classes.streams}>
      <div className={classes.embedContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLp4wchugWzHuDS60WBFsxJ29YHlksIsxI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
)

export default Streams
