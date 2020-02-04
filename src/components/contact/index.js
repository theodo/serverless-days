import React, { Fragment } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import classes from "./styles.module.scss"
import mailLogo from "../../images/mail.svg"
import twitterLogo from "../../images/twitterLogo.svg"

import adrien from "../../images/orgs/adrien.jpeg"
import alexis from "../../images/orgs/alexis.png"
import benjamin from "../../images/orgs/benjamin.jpg"
import christopher from "../../images/orgs/christopher.png"
import diane from "../../images/orgs/diane.jpeg"
import guillaume from "../../images/orgs/guillaume.jpg"
import matthieu from "../../images/orgs/matthieu.jpeg"
import maxime from "../../images/orgs/maxime.jpeg"
import sebastien from "../../images/orgs/sebastien.png"

const Contact = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: {
          fields: base,
          order: ASC
        },
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "orgs" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return ( 
    <div id={id} className={classes.bacgroundContainer}>
      <div className={classes.container}>
        <h2><FormattedMessage id="contact.title"/></h2>
        <p><FormattedMessage id="contact.content" /></p>
        <ul className={classes.membersList}>
          { data.allFile.edges.map(image => (
            <li className={classes.member}><Member name={image.node.base.split(".")[0]} picture={image.node.childImageSharp.fixed} /></li>
          )) }
        </ul>
        <div className={classes.address}>
          <div className={classes.email}>
            <img src={mailLogo} alt="" />
            <address>
              <a href="mailto:paris@serverlessdays.io">
                paris@serverlessdays.io
              </a>
            </address>
          </div>
          <div className={classes.socials}>
            <a href="https://twitter.com/ServerlessParis"><img src={twitterLogo} alt="Twitter" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

const Member = ({name, picture}) => (
  <Fragment>
    <Img
      fixed={picture}
      width="100px"
      height="100px"
      style={{ display: "block", margin: "0 auto 5px"}}
    />
    <span className={classes.memberName}>{name}</span>
  </Fragment>
)
