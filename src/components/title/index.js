import React, { Component } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import titleImage from "../../images/titleImage.svg"

class Title extends Component {
  render() {
    return (
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
          <a className={classes.button} href="https://www.papercall.io/serverless-days-paris-2021">
            <FormattedMessage id="title.call-to-action" />
          </a>
        </div>
        <div className={classes.desktopTitleImageContainer}>
          <img className={classes.desktopTitleImage} alt="" src={titleImage} />
        </div>
      </div>
    )
  }
}

export default Title
