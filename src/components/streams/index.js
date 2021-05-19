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
          src="https://www.youtube.com/embed/eVKHBrrz7jY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={classes.embedContainer}>
        <iframe
          src="https://www.youtube-nocookie.com/embed/w_7dz77P9DE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={classes.embedContainer}>
        <iframe
          src="https://www.youtube-nocookie.com/embed/cXI753VsIzs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={classes.embedContainer}>
        <iframe
          src="https://www.youtube-nocookie.com/embed/L6Zwg6Cjy30"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={classes.embedContainer}>
        <iframe
          src="https://www.youtube-nocookie.com/embed/hGwx0zSK23A"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
)

export default Streams
