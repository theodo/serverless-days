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
          <li>
            <p className={`${classes.locationTitle} ${classes.capitalize}`}>
              Theodo
            </p>
            <p>
              48 boulevard des batignoles
              <br />
              75017, Paris
            </p>
          </li>
          <li>
            <p className={classes.locationTitle}>S'y rendre</p>
            <ul className={classes.transportationList}>
              <li>
                <img className={classes.logo} src={metroLogo} />
                <span>Rome</span>
                <img className={classes.logo} src={metro2} />
              </li>
              <li>
                <img className={classes.logo} src={metroLogo} />
                <span>Place de Clichy</span>
                <img className={classes.logo} src={metro2} />
                <img className={classes.logo} src={metro13} />
              </li>
            </ul>
          </li>
          <li>
            <p className={`${classes.locationTitle} ${classes.capitalize}`}>
              Vous venez de loin ?
            </p>
            <button className={`${classes.button} ${classes.capitalize}`}>
              Trouvez un hebergement
            </button>
          </li>
        </ol>
      </div>
    </div>
  </div>
)

export default Location
