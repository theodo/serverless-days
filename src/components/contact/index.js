import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import mailLogo from "../../images/mail.svg"
import twitterLogo from "../../images/twitterLogo.svg"

const Contact = ({ id }) => {
  return (
    <div id={id} className={classes.bacgroundContainer}>
      <div className={classes.container}>
        <h2>
          <FormattedMessage id="contact.title" />
        </h2>
        <p>
          <FormattedMessage id="contact.content" />
        </p>
        <div className={classes.address}>
          <div className={classes.email}>
            <img src={mailLogo} alt="" />
            <address>
              <a href="mailto:paris@serverlessdays.io">
                paris@serverlessdays.io
              </a>
            </address>
          </div>
          <div className={classes.socials}>
            <a href="https://twitter.com/ServerlessParis">
              <img src={twitterLogo} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
