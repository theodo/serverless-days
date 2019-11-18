import React from "react"
import classes from "./styles.module.scss"
import metroLogo from "../../images/metro-logo.svg"
import metro2 from "../../images/metro2.svg"
import metro3 from "../../images/metro3.svg"
import metro9 from "../../images/metro9.svg"

const Location = () => (
  <div className={classes.backgroundContainer}>
    <div className={classes.container}>
      <div className={classes.informations}>
        <h2>Lieu</h2>
        <ol className={classes.locationInformations}>
          <li className={classes.locationInformationBlock}>
            <p className={`${classes.locationTitle} ${classes.capitalize}`}>
              Pan Piper
            </p>
            <p className={classes.locationText}>
              2-4 Impasse Lamier
              <br />
              75011 Paris
            </p>
          </li>
          <li className={classes.locationInformationBlock}>
            <p className={classes.locationTitle}>S'y rendre</p>
            <ul className={classes.transportationList}>
              <li>
                <img className={classes.logo} src={metroLogo} alt="" />
                <span>Philippe-Auguste</span>
                <img
                  className={classes.logo}
                  src={metro2}
                  alt="metro ligne 2"
                />
              </li>
              <li>
                <img className={classes.logo} src={metroLogo} alt="" />
                <span>Père Lachaise</span>
                <img
                  className={classes.logo}
                  src={metro3}
                  alt="metro ligne 3"
                />
              </li>
              <li>
                <img className={classes.logo} src={metroLogo} alt="" />
                <span>Voltaire ou Charonne</span>
                <img
                  className={classes.logo}
                  src={metro9}
                  alt="metro ligne 9"
                />
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
          title="carte du quartier de la conférence"
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/view?zoom=17&center=48.85769%2C2.388837&key=AIzaSyAtVkGSGU7sFqPq_P_P3fx8NmnBmS-CY_U"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
)

export default Location
