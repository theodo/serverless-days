import React, {useState} from "react"
import Modal from "react-modal";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"

const Tickets = ({ id }) => {
  const intl = useIntl();
  const [modalIsOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div id={id} className={classes.container}>
      <a
        onClick={openModal}
        className={classes.button}
      >
        <FormattedMessage id="tickets.title" />
      </a>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel={intl.formatMessage({ id: "tickets.title"})}
          className={classes.modale}
        >
          <div className={classes.responsiveModalContainer}>
            <iframe
              className={classes.responsideModaleIframe}
              src="https://widget.weezevent.com/ticket/E801420/?code=60881&locale=fr-FR&width_auto=1&color_primary=00AEEF"
            />
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Tickets
