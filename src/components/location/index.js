import React from "react"
import classes from "./styles.module.scss"
import metroLogo from "../../images/metro-logo.svg"
import metro2 from "../../images/metro2.svg"
import metro13 from "../../images/metro13.svg"

const Location = () => (
  <div className={classes.backgroundContainer}>
    <div className={classes.container}>
      <div className={classes.informations}>
        <h2>Lieu</h2>
        <ol className={classes.locationInformations}>
          <li className={classes.locationInformationBlock}>
            <p className={`${classes.locationTitle} ${classes.capitalize}`}>
              Theodo
            </p>
            <p>
              48 boulevard des batignoles
              <br />
              75017, Paris
            </p>
          </li>
          <li className={classes.locationInformationBlock}>
            <p className={classes.locationTitle}>S'y rendre</p>
            <ul className={classes.transportationList}>
              <li>
                <img className={classes.logo} src={metroLogo} alt="" />
                <span>Rome</span>
                <img
                  className={classes.logo}
                  src={metro2}
                  alt="metro ligne 2"
                />
              </li>
              <li>
                <img className={classes.logo} src={metroLogo} alt="" />
                <span>Place de Clichy</span>
                <img
                  className={classes.logo}
                  src={metro2}
                  alt="metro ligne 2"
                />
                <img
                  className={classes.logo}
                  src={metro13}
                  alt="metro ligne 13"
                />
              </li>
            </ul>
          </li>
          <li className={classes.locationInformationBlock}>
            <p className={`${classes.locationTitle} ${classes.capitalize}`}>
              Vous venez de loin ?
            </p>
            <button className={`${classes.button} ${classes.capitalize}`}>
              Trouvez un hebergement
            </button>
          </li>
        </ol>
      </div>
      <div className={classes.locationMap}>
        <iframe
          title="carte du quartier de la conférence"
          width="100%"
          height="100%"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/view?zoom=17&center=48.8827%2C2.3223&key=AIzaSyAtVkGSGU7sFqPq_P_P3fx8NmnBmS-CY_U"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
)

export default Location
