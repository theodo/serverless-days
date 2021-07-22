import React from "react"
import {
  useIntl,
  FormattedMessage,
  Link,
  IntlContextConsumer,
  changeLocale,
} from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import logo from "../../images/logo.svg"

const Header = () => {
  const languageNames = {
    fr: "FR 🇫🇷",
    en: "EN 🇬🇧",
  }

  const intl = useIntl()

  let codeOfConduct = (
    <Link to="/code-de-conduite">
      <FormattedMessage id="header.code-of-conduct" />
    </Link>
  )

  if (intl.locale === "en") {
    codeOfConduct = (
      <Link to="/code-of-conduct">
        <FormattedMessage id="header.code-of-conduct" />
      </Link>
    )
  }

  return (
    <header className={classes.header}>
      <img src={logo} alt="serverless days paris 2021" />
      <ol className={classes.shortcuts}>
        <li>
          <Link to="/">
            <FormattedMessage id="header.home" />
          </Link>
        </li>
        <li>
          <Link to="/#talks">
            <FormattedMessage id="header.talks" />
          </Link>
        </li>
        <li>{codeOfConduct}</li>
        <li>
          <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
              languages.map(language => {
                if (language === currentLocale) {
                  return
                }

                return (
                  <a
                    key={language}
                    href="#"
                    onClick={() => changeLocale(language)}
                  >
                    {languageNames[language]}
                  </a>
                )
              })
            }
          </IntlContextConsumer>
        </li>
        <li>
          <a href="https://www.weezevent.com/serverlessdays-paris-2021" className={classes.button}>
            <FormattedMessage id="title.call-to-action" />
          </a>
        </li>
      </ol>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
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
        `,
        }}
      />
    </header>
  )
}

export default Header
