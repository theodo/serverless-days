import React from "react"
import classes from "./styles.module.scss"
import Img from "gatsby-image"
import format from "date-fns/format"
import partyPicture from "../../images/party.svg"

const TalkCard = ({
  hour,
  title,
  description,
  name,
  job,
  company,
  picture,
  isParty,
  openDialog,
}) => {
  if (isParty) {
    return (
      <li
        className={`${classes.container} ${classes.isParty}`}
        onClick={openDialog}
      >
        <div className={classes.informationContainer}>
          <p className={classes.hourContainer}>
            <time
              dateTime={format(new Date(hour), "HH:mm")}
              className={classes.hour}
            >
              {format(new Date(hour), "hh:mm a")}
            </time>
          </p>
          <div className={classes.descriptionContainer}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.description}>{description}</p>
          </div>
        </div>
        <img src={partyPicture} className={classes.partyPicture} alt="" />
      </li>
    )
  }
  return (
    <li
      className={`${classes.container} ${classes.isNotParty}`}
      onClick={openDialog}
    >
      <div className={classes.informationContainer}>
        <p className={classes.hourContainer}>
          <time
            dateTime={format(new Date(hour), "HH:mm")}
            className={classes.hour}
          >
            {format(new Date(hour), "hh:mm a")}
          </time>
        </p>
        <div className={classes.descriptionContainer}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.description}>{description}</p>
        </div>
        <div className={classes.authorContainer}>
          <Img
            fixed={picture.childImageSharp.small}
            alt=""
            width="43px"
            height="43px"
          />
          <div className={classes.authorTextContainer}>
            <p className={classes.author}>{`${name}, ${job}`}</p>
            <p className={classes.company}>{company}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TalkCard
