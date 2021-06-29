import React, { Component } from "react"
import classes from "./styles.module.scss"
import { FormattedMessage } from "gatsby-plugin-intl"

class CallToAction extends Component {
  click() {
    document
      .getElementById("eventbrite-widget-modal-trigger-82099189887")
      .click()
  }

  render() {
    return (
      <div className={classes.container}>
        <p className={classes.text}>
          <FormattedMessage id="call_to_action.text" />
        </p>
        <button className={classes.button} onClick={this.click}>
          <FormattedMessage id="call_to_action.button.content" />
        </button>
      </div>
    )
  }
}

export default CallToAction
