import React, { Component } from "react"
import classes from "./styles.module.scss"
import logo from "../../images/logo.svg"

class Header extends Component {
  componentDidMount(){
    const script = document.createElement('script')
    script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js"
    script.async = true;
    this.instance.appendChild(script)
  }

  render () {
    return (
      <header className={classes.header} ref={el => (this.instance = el)}>
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
        <script async dangerouslySetInnerHTML={{
        __html: `
            console.log('appended')
            var exampleCallback = function() {
              console.log("Order complete!");
            };

            window.EBWidgets.createWidget({
              widgetType: "checkout",
              eventId: "52766401728",
              modal: true,
              modalTriggerElementId: "example-widget-trigger",
              onOrderComplete: exampleCallback
            });
        `
        }} />
      </header>
    )
  }
}

export default Header
