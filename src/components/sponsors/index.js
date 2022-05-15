import React, { useState, useCallback } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import classes from "./styles.module.scss"
import theodoLogo from "../../images/sponsorsLogo/Theodo.svg"
import awsLogo from "../../images/sponsorsLogo/AWS.svg"
import ovrseaLogo from "../../images/sponsorsLogo/ovrsea.png"
import lumigoLogo from "../../images/sponsorsLogo/lumigo.png"
import zenikaLogo from "../../images/sponsorsLogo/zenika.png"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import close from "../../images/close.svg"

const nameImageMapping = {
  theodo: { image: theodoLogo, url: "https://theodo.com" },
  aws: { image: awsLogo, url: "https://aws.amazon.com" },
  lumigo: { image: lumigoLogo, url: "https://lumigo.io" },
  ovrsea: { image: ovrseaLogo, url: "https://ovrsea.com" },
  zenika: { image: zenikaLogo, url: "https://zenika.com" },
}

const SponsorModal = ({ closeModal, modalData }) => {
  return (
    <Dialog open onClose={closeModal} fullWidth>
      <div className={classes.close}>
        <button onClick={closeModal}>
          <img src={close} alt="exit" />
        </button>
      </div>
      <a
        style={{ alignSelf: "center" }}
        href={nameImageMapping[modalData].url}
        target="_blank"
      >
        <img
          className={classes.modalLogo}
          src={nameImageMapping[modalData].image}
          alt={modalData}
        />
      </a>
      <DialogContent className={classes.modalContainer}>
        <FormattedMessage
          id={`sponsors.${modalData}`}
          values={{ br: <br /> }}
        />
      </DialogContent>
    </Dialog>
  )
}

const Sponsors = ({ id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalData, setModalData] = useState(null)

  const closeModal = useCallback(() => {
    setModalIsOpen(false)
    setModalData(null)
  }, [setModalData, setModalIsOpen])

  const openModal = useCallback(
    name => {
      setModalIsOpen(true)
      setModalData(name)
    },
    [setModalData, setModalIsOpen]
  )

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
            <img
              className={(classes.logo, classes.bigLogo)}
              src={theodoLogo}
              alt="Theodo"
              onClick={() => openModal("theodo")}
            />

            <img
              className={(classes.logo, classes.bigLogo)}
              src={awsLogo}
              alt="AWS"
              onClick={() => openModal("aws")}
            />
          </div>
        </div>
        <div className={classes.secondSponsors}>
          <div className={classes.sponsor}>
            <p className={classes.sponsorType}>Gold</p>
            <img
              className={(classes.logo, classes.mediumLogo)}
              src={lumigoLogo}
              alt="Lumigo"
              onClick={() => openModal("lumigo")}
            />
          </div>
          <div className={classes.sponsor}>
            <p className={classes.sponsorType}>Silver</p>
            <img
              className={classes.logo}
              src={ovrseaLogo}
              alt="Ovrsea"
              onClick={() => openModal("ovrsea")}
            />
          </div>
        </div>
        <div className={classes.logos}>
          <p className={classes.sponsorType}>Bronze</p>
          <img
            className={(classes.logo, classes.smallLogo)}
            src={zenikaLogo}
            alt="Zenika"
            onClick={() => openModal("zenika")}
          />
        </div>
        {modalIsOpen && (
          <SponsorModal closeModal={closeModal} modalData={modalData} />
        )}
      </div>
    </div>
  )
}

export default Sponsors
