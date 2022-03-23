import React, {useState} from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import close from "../../images/close.svg"
import { FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"

const Tickets = ({ id }) => {
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
        <Dialog
            open={modalIsOpen}
            onClose={closeModal}
            maxWidth="xl"
            fullWidth

          >
            <div className={classes.close}>
              <button onClick={closeModal}>
                <img src={close} alt="exit" />
              </button>
            </div>
            <DialogContent className={classes.responsiveModalContainer}>
              <iframe
                className={classes.responsideModaleIframe}
                src="https://widget.weezevent.com/ticket/E801420/?code=60881&locale=fr-FR&width_auto=1&color_primary=00AEEF"
              />
            </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default Tickets
