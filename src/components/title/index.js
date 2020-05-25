import React, { Component } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import titleImage from "../../images/titleImage.svg"

class Title extends Component {
  render() {
    return (
      <div className={classes.backgroundContainer}>
        <div className={classes.container}>
          <div className={classes.informations}>
            <h1 className={classes.title}>
              <FormattedMessage id="title.title" />
              <br />
              <span className={classes.location}>
                <FormattedMessage id="title.location-year" />
              </span>
            </h1>
            <div className={classes.mobileTitleImageContainer}>
              <img alt="" src={titleImage} />
            </div>
            <h2 className={classes.subtitle}>
              <FormattedMessage id="title.subtitle" />
            </h2>
            <p className={classes.rendezVous}>
              <FormattedMessage id="title.rendez-vous.when" />
              <br />
            </p>
          </div>
          <div className={classes.desktopTitleImageContainer}>
            <img alt="" src={titleImage} />
          </div>
        </div>
      </div>
    )
  }
}

export default Title
