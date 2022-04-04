import React from "react"
import Modal from "react-modal"
import { FormattedMessage } from "gatsby-plugin-intl"
import classes from "./styles.module.scss"
import theodoLogo from "../../images/sponsorsLogo/Theodo.svg"
import awsLogo from "../../images/sponsorsLogo/AWS.svg"
import ovrseaLogo from "../../images/sponsorsLogo/ovrsea.png"
import lumigoLogo from "../../images/sponsorsLogo/lumigo.png"
import zenikaLogo from "../../images/sponsorsLogo/zenika.png"

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
      <div className={classes.sponsorsContainer}>
        <div className={classes.sponsor}>
          <p className={classes.sponsorType}>Platinum</p>
          <div className={classes.inLineSponsors}>
            <a href="https://www.theodo.fr/" target="_blank" >
              <img
                className={(classes.logo, classes.bigLogo)}
                src={theodoLogo}
                alt="Theodo"
              />
            </a>
            <a href="https://aws.amazon.com/" target="_blank" >
              <img
                className={(classes.logo, classes.bigLogo)}
                src={awsLogo}
                alt="AWS"
              />
            </a>
          </div>
        </div>
        <div className={classes.secondSponsors}>
          <div className={classes.sponsor}>
            <p className={classes.sponsorType}>Gold</p>
            <a href="https://lumigo.io/" target="_blank" >
              <img
                className={(classes.logo, classes.mediumLogo)}
                src={lumigoLogo}
                alt="Lumigo"
              />
            </a>
          </div>
          <div className={classes.sponsor}>
            <p className={classes.sponsorType}>Silver</p>
            <a href="https://www.ovrsea.com/fr/" target="_blank" >
              <img className={classes.logo} src={ovrseaLogo} alt="Ovrsea" />
            </a>
          </div>
        </div>
        <div className={classes.logos}>
          <p className={classes.sponsorType}>Bronze</p>
          <a href="https://www.zenika.com/" target="_blank" >
            <img className={(classes.logo, classes.smallLogo)} src={zenikaLogo} alt="Zenika" />
          </a>
        </div>
      </div>
      {/* <hr className={classes.inKindLine} />
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
      </div> */}
    </div>
  )
}

export default Sponsors
