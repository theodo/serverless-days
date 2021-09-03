import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"
import titleImage from "../../images/titleImage.svg"

const Title = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
    }
    return () => {
      setLoaded(false)
    }
  }, [loaded])
  return (
    <div className={classes.container}>
      <div className={classes.informations}>
        <h1 className={classes.title}>
          <FormattedMessage id="title.title" />
          <br />
          <span className={classes.location}>
            <FormattedMessage id="title.location-year" />
          </span>
        </h1>
        <div className={classes.mobileTitleImageContainer}>
          <img alt="" src={titleImage} />
        </div>
        <h2 className={classes.subtitle}>
          <FormattedMessage id="title.subtitle" />
        </h2>
        <a
          title="Logiciel billetterie en ligne"
          href="https://www.weezevent.com/widget_multi.php?266452.1.1.bo"
          class="weezevent-widget-integration"
          target="_blank"
          data-src="https://www.weezevent.com/widget_multi.php?266452.1.1.bo"
          data-width="100%"
          data-height="100%"
          data-id="multi"
          data-resize="1"
          data-npb="0"
          data-width_auto="1"
        >
          Billetterie Weezevent
        </a>
        {loaded ? (
          <Helmet>
            <script
              async
              type="text/javascript"
              src="https://www.weezevent.com/js/widget/min/widget.min.js"
            ></script>
          </Helmet>
        ) : (
          <></>
        )}
      </div>
      <div className={classes.desktopTitleImageContainer}>
        <img className={classes.desktopTitleImage} alt="" src={titleImage} />
      </div>
    </div>
  )
}

export default Title
