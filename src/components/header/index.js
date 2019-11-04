import { Link } from "gatsby"
import React from "react"
import classes from "./styles.module.scss"

const Header = ({ siteTitle }) => (
  <header className={classes.header}>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <ol className={classes.shortcuts}>
      <li>
        <a href="#talks">talks</a>
      </li>
      <li>
        <a href="#contact">contact & lieu</a>
      </li>
      <li>
        <a href="#sponsor">become a sponsor</a>
      </li>
    </ol>
  </header>
)

export default Header
