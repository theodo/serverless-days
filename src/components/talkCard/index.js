import React from "react"
import classes from "./styles.module.scss"
import Img from "gatsby-image"
import format from "date-fns/format"

const TalkCard = ({
  hour,
  title,
  description,
  name,
  job,
  company,
  picture,
}) => (
  <li className={classes.container}>
    <p>
      <span className={classes.hour}>{format(new Date(hour), "hh:mm a")}</span>
    </p>
    <div className={classes.descriptionContainer}>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
    <div className={classes.authorContainer}>
      <Img
        fixed={picture.childImageSharp.fixed}
        alt=""
        width="43px"
        height="43px"
      />
      <div className={classes.authorTextContainer}>
        <p className={classes.author}>{`${name}, ${job}`}</p>
        <p className={classes.company}>{company}</p>
      </div>
    </div>
  </li>
)

export default TalkCard
