import React, { Fragment } from "react"
import classes from "./styles.module.scss"
import Img from "gatsby-image"
import format from "date-fns/format"
import partyPicture from "../../images/party.svg"
import talkPending from "../../images/hourglass.png"

const TalkCardItem = ({
  key,
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
  if (!isSpeakerReady(name, title)) {
    return null
  }

  return (
    <li
      key={key}
      className={`${classes.container} ${
        isParty ? classes.isParty : classes.isNotParty
      }`}
      onClick={!isParty ? openDialog : null}
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === "Enter") {
          openDialog()
        }
      }}
    >
      {!isParty && (
        <TalkCard 
          hour={hour}
          name={name} 
          job={job} 
          company={company} 
          title={title} 
          description={description} 
          picture={picture}
        />
      )}
      {isParty && (
        <Party 
          hour={hour}
          title={title} 
          description={description} 
          picture={picture}
        />
      )}
    </li>
  )
}

const TalkCard = ({
  title, 
  description, 
  hour, 
  name, 
  job, 
  company,
  picture
}) => (
  <div className={classes.informationContainer}>
    {/*<TalkTime hour={hour} />*/}
    <div className={classes.descriptionContainer}>
      <h3 className={classes.title}>{title}</h3>
      <NotNull nullable={description}><p className={classes.description}>{description}</p></NotNull>
    </div>
    <Speaker picture={picture} name={name} job={job} company={company} />
  </div>
)

const TalkTime = ({hour}) => (
  <p className={classes.hourContainer}>
    <time
      dateTime={format(new Date(hour), "HH:mm")}
      className={classes.hour}
      >
      {format(new Date(hour), "hh:mm a")}
    </time>
  </p>
)

const Speaker = ({
  name,
  job,
  company,
  picture
}) => (
  <div className={classes.authorContainer}>
    {picture != null && picture.childImageSharp != null && (
      <Img
        fixed={picture.childImageSharp.small}
        alt=""
        width="43"
        height="43"
        />
    )}
    <div className={classes.authorTextContainer}>
      <NotNull nullable={name}><p className={classes.author}>{name}</p></NotNull>
      <NotNull nullable={job}><p className={classes.job}>{job}</p></NotNull>
      <p className={classes.company}>{company}</p>
    </div>
  </div>
)

const Party = ({hour, title, description, picture}) => (
  <div className={classes.informationContainer}>
    <TalkTime hour={hour} />
    <div className={classes.descriptionContainer}>
        <h3 className={classes.title}>{title}</h3>
        <NotNull nullable={description}><p className={classes.description}>{description}</p></NotNull>
      </div>
    <img src={picture} className={classes.partyPicture} alt="" />
  </div>
)

const NotNull = ({nullable, children}) => {
  if (nullable != null) {
    return children
  }
  return null
}

function isSpeakerReady(name, title) {
  return name !== "" && title !== ""
}

export default TalkCard
