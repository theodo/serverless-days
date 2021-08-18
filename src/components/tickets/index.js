import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { FormattedMessage } from "gatsby-plugin-intl"

import classes from "./styles.module.scss"

const Tickets = ({ id }) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
    }
  }, [setLoaded])

  return (
    <div id={id} className={classes.container}>
      <h2>
        <FormattedMessage id="tickets.title" />
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
  )
}

export default Tickets
