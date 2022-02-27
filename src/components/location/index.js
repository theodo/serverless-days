import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import ligne11 from "../../images/ligne11.svg"

const Location = ({ id }) => {
  const intl = useIntl()
  return (
    <div className={classes.backgroundContainer}>
      <div id={id} className={classes.container}>
        <div className={classes.informations}>
          <h2>
            <FormattedMessage id="location.title" />
          </h2>
          <ol className={classes.locationInformations}>
            <li className={classes.locationInformationBlock}>
              <p className={`${classes.locationTitle} ${classes.capitalize}`}>
                La Bellevilloise
              </p>
              <p className={classes.locationText}>
                19 rue Boyer
                <br />
                75020 Paris
              </p>
            </li>
            <li className={classes.locationInformationBlock}>
              <p className={classes.locationTitle}>
                <FormattedMessage id="location.how-to-go" />
              </p>
              <ul className={classes.transportationList}>
                <li>
                  <img className={classes.logo} src={ligne11} alt="" />
                  <span>Jourdain</span>
                </li>
              </ul>
            </li>
            {/* <li className={classes.locationInformationBlock}>
              <p className={`${classes.locationTitle} ${classes.capitalize}`}>
                Vous venez de loin ?
              </p>
              <button className={`${classes.button} ${classes.capitalize}`}>
                Trouvez un hebergement
              </button>
            </li> */}
          </ol>
        </div>
        <div className={classes.locationMap}>
          <iframe
            title={intl.formatMessage({ id: "location.map.title" })}
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJVeiKGZNt5kcRkPH9S37Lnzg&key=AIzaSyAyEqDUxa0uPRo2XiRrBsXmfoZz5VEeJ7o"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Location
