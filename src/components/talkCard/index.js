import React from "react"
import classes from "./styles.module.scss"
import Img from "gatsby-image"

console.log(classes)
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
      <span className={classes.hour}>{hour}</span>
    </p>
    <h3 className={classes.title}>{title}</h3>
    <p className={classes.description}>{description}</p>
    <div className={classes.authorContainer}>
      <Img fixed={picture.childImageSharp.fixed} />
      <img src="" alt="" width="43px" height="43px" />
      <div className={classes.authorTextContainer}>
        <p className={classes.author}>{`${name}, ${job}`}</p>
        <p className={classes.company}>{company}</p>
      </div>
    </div>
  </li>
)

export default TalkCard
