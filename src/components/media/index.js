import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import programmezLogo from "../../images/sponsorsLogo/programmez.svg"
import itProLogo from "../../images/sponsorsLogo/itPro.jpg"
import smartDsiLogo from "../../images/sponsorsLogo/smartDsi.jpg"
import { useState, useCallback } from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import close from "../../images/close.svg"

const nameImageMapping = {
  itPro: { image: itProLogo, url: "https://iTPro.fr" },
  smartDsi: {
    image: smartDsiLogo,
    url: "https://www.itpro.fr/decouvrir-smartdsi/",
  },
}

const MediaModal = ({ closeModal, modalData }) => {
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

const Media = ({ id }) => {
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
    <div id={id} className={classes.container}>
      <h2>
        <FormattedMessage id="media.title" />
      </h2>
      <p className={classes.subtitle}>
        <FormattedMessage id="media.content" />
      </p>
      <div className={classes.mediaLogos}>
        <div className={classes.mediaLogo}>
          <a href="https://www.programmez.com/">
            <img src={programmezLogo} alt="Programmez" />
          </a>
        </div>
        <div className={classes.mediaLogo}>
          <img
            src={itProLogo}
            alt="ITPro"
            width={500}
            onClick={() => openModal("itPro")}
          />
        </div>
        <div className={classes.mediaLogo}>
          <img
            src={smartDsiLogo}
            alt="SmartDSI"
            onClick={() => openModal("smartDsi")}
          />
        </div>
        {modalIsOpen && (
          <MediaModal closeModal={closeModal} modalData={modalData} />
        )}
      </div>
    </div>
  )
}

export default Media
