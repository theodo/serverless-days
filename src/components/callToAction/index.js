import React, { Component } from "react"
import classes from "./styles.module.scss"

class CallToAction extends Component {
  click () {
    document.getElementById('eventbrite-widget-modal-trigger-82099189887').click()
  }

  render() {
    return (
      <div className={classes.container}>
        <p className={classes.text}>
          Venez assister à une journée de conférence avec des experts, networker et
          découvrir de nouveaux sujets …
        </p>
        <button className={classes.button} onClick={ this.click }>prendre sa place</button>
      </div>
    )
  }
}

export default CallToAction
