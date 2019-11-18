import React from "react"
import classes from "./styles.module.scss"
import logo from "../../images/logo.svg"

const Header = () => (
  <header className={classes.header}>
    <img src={logo} alt="serverless days paris 2020" />
    <ol className={classes.shortcuts}>
      <li>
        <a href="#talks">talks</a>
      </li>
      <li>
        <a href="#contact">lieu & contact</a>
      </li>
      <li>
        <a href="#sponsor">become a sponsor</a>
      </li>
      <li>
        <button id="eventbrite-widget-modal-trigger-82099189887">Billetterie</button>
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
