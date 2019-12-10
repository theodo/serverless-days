import React from "react"
import { FormattedMessage , Link } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import logo from "../../images/logo.svg"

const Header = () => (
  <header className={classes.header}>
    <img src={logo} alt="serverless days paris 2020"/>
    <ol className={classes.shortcuts}>
      <li>
        <Link to="/#talks"><FormattedMessage id="header.talks"/></Link>
      </li>
      <li>
        <Link to="/#location"><FormattedMessage id="header.location"/></Link>
      </li>
      <li>
        <Link to="/#sponsor"><FormattedMessage id="header.sponsor"/></Link>
      </li>
      <li>
        <Link to="/code-de-conduite"><FormattedMessage id="header.code-of-conduct"/></Link>
      </li>
      <li>
        <button id="eventbrite-widget-modal-trigger-82099189887"><FormattedMessage id="header.tickets"/></button>
      </li>
    </ol>
    <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>
    <script type="text/javascript" dangerouslySetInnerHTML={{
      __html: `
        var exampleCallback = function() {
          console.log('Order complete!');
        };

        window.EBWidgets.createWidget({
          widgetType: 'checkout',
          eventId: '82099189887',
          modal: true,
          modalTriggerElementId: 'eventbrite-widget-modal-trigger-82099189887',
          onOrderComplete: exampleCallback
        });
      `
    }} />
  </header>
)

export default Header
