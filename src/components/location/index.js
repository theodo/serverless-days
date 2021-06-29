import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import rerLogo from "../../images/rer-logo.svg"
import tramLogo from "../../images/tram-logo.svg"
import rerB from "../../images/rerB.svg"
import tram3a from "../../images/tram3a.svg"

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
                Cité Internationale Universitaire de Paris
              </p>
              <p className={classes.locationText}>
                17 Boulevard Jourdan
                <br />
                75014 Paris
              </p>
            </li>
            <li className={classes.locationInformationBlock}>
              <p className={classes.locationTitle}>
                <FormattedMessage id="location.how-to-go" />
              </p>
              <ul className={classes.transportationList}>
                <li>
                  <img className={classes.logo} src={rerLogo} alt="" />
                  <span>Cité Universitaire</span>
                  <img className={classes.logo} src={rerB} alt="rer ligne B" />
                </li>
                <li>
                  <img className={classes.logo} src={tramLogo} alt="" />
                  <span>Cité Universitaire</span>
                  <img className={classes.logo} src={tram3a} alt="tram T3a" />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10508.054242717448!2d2.3385613000000105!3d48.819802700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c4282bc491b8270!2sCit%C3%A9%20Internationale%20Universitaire%20de%20Paris!5e0!3m2!1sen!2sfr!4v1624958933303!5m2!1sen!2sfr"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Location
