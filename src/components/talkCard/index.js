import React from "react"
import classes from "./styles.module.scss"
import Img from "gatsby-image"
import { FormattedDate, FormattedTime } from "gatsby-plugin-intl"
import format from "date-fns/format"

import partyPicture from "../../images/party.svg"
import twitterLogo from "../../images/TwitterLogoBlue.svg"

const TalkCardItem = ({
  key,
  hour,
  title,
  description,
  name,
  job,
  company,
  picture,
  twitter,
  isParty,
  warmup,
  openDialog,
}) => {
  if (isParty || !isSpeakerReady(name, title)) {
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
          twitter={twitter}
          warmup={warmup}
        />
      )}
      {isParty && (
        <Party
          hour={hour}
          title={title}
          description={description}
          picture={partyPicture}
        />
      )}
    </li>
  )
}

const TalkTime = ({ hour }) => (
  <time dateTime={format(new Date(hour), "HH:mm")} className={classes.hour}>
    <FormattedTime value={new Date(hour)} />
  </time>
)

const TalkDate = ({ hour }) => (
  <time dateTime={format(new Date(hour), "dd MMMM")} className={classes.hour}>
    {/* <FormattedDate value={new Date(hour)} /> */}
    June 2022
  </time>
)

const TalkCard = ({ title, hour, name, job, company, picture, twitter, warmup }) => (
  <div className={classes.cardContainer}>
    { warmup ? <TalkDate hour={hour} /> : <TalkTime hour={hour} /> }
    <Img
      fixed={picture.childImageSharp.large}
      alt={name}
      width="398"
      height="250"
    />
    <div className={classes.dataContainer}>
      <div className={classes.speaker}>
        {name}
        <a href={`https://twitter.com/${twitter}`}>
          <img src={twitterLogo} alt="Twitter" width="25" height="25" />
        </a>
      </div>
      <div className={classes.job}>
        {job} {company != null && `@${company}`}
      </div>
      <h3 className={classes.title}>{title}</h3>
    </div>
  </div>
)

const Party = ({ hour, title, description, picture }) => (
  <div className={classes.cardContainer}>
    <TalkTime hour={hour} />
    <div className={classes.descriptionContainer}>
      <h3 className={classes.title}>{title}</h3>
      <NotNull nullable={description}>
        <p className={classes.description}>{description}</p>
      </NotNull>
    </div>
    <img src={picture} className={classes.partyPicture} alt="" />
  </div>
)

const NotNull = ({ nullable, children }) => {
  if (nullable != null) {
    return children
  }
  return null
}

function isSpeakerReady(name, title) {
  return name !== "" && title !== ""
}

export default TalkCardItem
