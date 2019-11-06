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
        <a href="#contact">contact & lieu</a>
      </li>
      <li>
        <a href="#sponsor">become a sponsor</a>
      </li>
      <li>
        <button>Billetterie</button>
      </li>
    </ol>
  </header>
)

export default Header
