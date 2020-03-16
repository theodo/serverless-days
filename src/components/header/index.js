import React from "react"
import { useIntl, FormattedMessage, Link, IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import logo from "../../images/logo.svg"

const Header = () => {
  const languageNames = {
    "fr": "FR 🇫🇷",
    "en": "EN 🇬🇧"
  }

  const intl = useIntl()

  let codeOfConduct = <Link to="/code-de-conduite"><FormattedMessage id="header.code-of-conduct"/></Link>

  if(intl.locale === "en") {
    codeOfConduct = <Link to="/code-of-conduct"><FormattedMessage id="header.code-of-conduct"/></Link>
  }

  return (
    <header className={classes.header}>
      <img src={logo} alt="serverless days paris 2020"/>
      <ol className={classes.shortcuts}>
        <li>
          {codeOfConduct}
        </li>
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
      </ol>
    </header>
  )
}

export default Header
