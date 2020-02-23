import React, { Fragment } from "react"
import classes from "./styles.module.scss"
import format from "date-fns/format"
import close from "../../images/close.svg"
import Img from "gatsby-image"

const DialogContent = ({
  hour,
  title,
  description,
  name,
  job,
  company,
  biographie,
  picture,
  isParty,
  closeDialog,
}) => (
  <Fragment>
    <div className={classes.close}>
      <button onClick={closeDialog}>
        <img src={close} alt="exit" />
      </button>
    </div>
    <div className={classes.container}>
      <p className={classes.hourContainer}>
        <time
          dateTime={format(new Date(hour), "HH:mm")}
          className={classes.hour}
        >
          {format(new Date(hour), "hh:mm a")}
        </time>
      </p>
      <div className={classes.informationContainer}>
        <div className={classes.talkInformation}>
          <div className={classes.talkDescription}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.text}>{description}</p>
          </div>
          {biographie && (
            <div className={classes.speekerBio}>
              <p className={classes.biographie}>biographie</p>
              <p className={classes.text}>{biographie}</p>
            </div>
          )}
          <div className={classes.socialMediaContainer}></div>
        </div>
        {!isParty && (
          <div className={classes.speekerInformation}>
            <Img
              fluid={picture.childImageSharp.medium}
              alt=""
              className={classes.speekerPicture}
            />
            <p className={classes.speekerText}>
              {`${name},`}
              <br />
              {job}
              <br />
              <span className={classes.speekerCompany}>{company}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  </Fragment>
)

export default DialogContent
