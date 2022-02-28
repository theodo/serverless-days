import classes from "./styles.module.scss"
import React, { useEffect, useState } from "react"
import { calculateTimeLeft } from "./calculateTimeLeft"
import { FormattedMessage } from "gatsby-plugin-intl"

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000)
  }, [timeLeft])

  return (
    <div className={classes.countdown}>
      <h2 className={classes.countdownMessage}>
        <FormattedMessage id="countdown.message" />
      </h2>
      <p className={classes.countdownMessage}></p>
      <div className={classes.counter}>
        <div className={classes.counterItem}>
          <span className={classes.value}>
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className={classes.label}>Days</span>
        </div>

        <div className={classes.counterItem}>
          <span className={classes.value}>
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className={classes.label}>Hours</span>
        </div>

        <div className={classes.counterItem}>
          <span className={classes.value}>
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className={classes.label}>Minutes</span>
        </div>

        <div className={classes.counterItem}>
          <span className={classes.value}>
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className={classes.label}>Seconds</span>
        </div>
      </div>
    </div>
  )
}

export default Countdown
