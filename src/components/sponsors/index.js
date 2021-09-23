import React from "react"
import Modal from "react-modal"
import { FormattedMessage } from "gatsby-plugin-intl"
import classes from "./styles.module.scss"
import theodoLogo from "../../images/sponsorsLogo/Theodo.svg"
import cajooLogo from "../../images/sponsorsLogo/cajoo.jpeg"
import datadogLogo from "../../images/sponsorsLogo/datadog.png"
import unifyLogo from "../../images/sponsorsLogo/unify.jpg"
import mickLogo from "../../images/sponsorsLogo/mick.png"
// import faunadbLogo from "../../images/sponsorsLogo/faunadb.svg"
import aircallLogo from "../../images/sponsorsLogo/aircall.jpg"

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 50,
    left: 50,
    right: 50,
    bottom: 50,
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "200px",
    border: "1px solid #ccc",
    overflow: "auto",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
}

const Sponsors = ({ id }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>
          <FormattedMessage id="sponsors.title" />
        </h2>
        <a
          className={classes.callToAction}
          href="mailto:paris@serverlessdays.io"
        >
          <FormattedMessage id="sponsors.call-to-action" />
        </a>
      </div>
      <p className={classes.subtitle}>
        <FormattedMessage id="sponsors.content" />
      </p>
      <a href="https://www.theodo.fr/">
        <div className={classes.logos}>
          <p className={classes.sponsorType}>Platinum</p>

          <img className={classes.logoPlat} src={theodoLogo} alt="Theodo" />
        </div>
      </a>
      <div className={classes.logosContainer}>
        <div className={classes.logos}>
          <p className={classes.sponsorType}>Silver</p>
          <a href="https://www.datadoghq.com/">
            <img
              className={classes.logoSilv1}
              src={datadogLogo}
              alt="DataDog"
            />
          </a>
          {/* <img className={classes.logoSilv2} src={faunadbLogo} alt="FaunaDb" /> */}
        </div>
        <a href="https://www.cajoo.eu/">
          <div className={classes.logos}>
            <p className={classes.sponsorType}>Gold</p>

            <img className={classes.logoGold} src={cajooLogo} alt="Cajoo" />
          </div>
        </a>

        <div className={classes.logos}>
          <p className={classes.sponsorType}>Bronze</p>
          <a href="https://unifygroup.com/">
            <img className={classes.logoBronze} src={unifyLogo} alt="Unify" />{" "}
          </a>
          <a href="https://aircall.io/fr/">
            <img
              className={classes.logoBronze}
              src={aircallLogo}
              alt="Aircall"
            />{" "}
          </a>
        </div>
      </div>
      <hr className={classes.inKindLine} />
      <p className={classes.sponsorType}>Suppliers</p>
      <div className={classes.logos}>
        <img
          className={classes.logoInKind}
          onClick={openModal}
          src={mickLogo}
          alt="Les cafés de Mick"
        />
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={ModalStyle}
        >
          <a href="https://www.lescafesdemick.fr">
            <FormattedMessage id="sponsors.mick-title" />
          </a>
          <br />
          <br />
          <FormattedMessage id="sponsors.mick-desc" />
        </Modal>
      </div>
    </div>
  )
}

export default Sponsors
