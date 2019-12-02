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
  return (
    <li
      className={`${classes.container} ${
        isParty ? classes.isParty : classes.isNotParty
      }`}
      onClick={openDialog}
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === "Enter") {
          openDialog()
        }
      }}
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
        {!isParty && (
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
        )}
      </div>
      {isParty && (
        <img src={partyPicture} className={classes.partyPicture} alt="" />
      )}
    </li>
  )
}

export default TalkCard
