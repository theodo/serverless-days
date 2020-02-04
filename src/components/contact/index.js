import React, { Fragment } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import classes from "./styles.module.scss"
import mailLogo from "../../images/mail.svg"
import twitterLogo from "../../images/twitterLogo.svg"

const Contact = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        filter: {fileAbsolutePath: {regex: "/(orgs)/"  }}
        sort: {
          fields: [frontmatter___name]
          order: ASC
        }
      ) {
        edges {
          node {
            frontmatter {
              name
              bio
              company
              twitter
              picture {            
                childImageSharp {
                  fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const orgs = data.allMarkdownRemark.edges.map(element => element.node.frontmatter)


  return ( 
    <div id={id} className={classes.bacgroundContainer}>
      <div className={classes.container}>
        <h2><FormattedMessage id="contact.title"/></h2>
        <p><FormattedMessage id="contact.content" /></p>
        <ul className={classes.membersList}>
          { orgs.map(organizer => (
            <li className={classes.member}><Member member={organizer} /></li>
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

const Member = ({member}) => (
  <Fragment>
    <Img
      fixed={member.picture.childImageSharp.fixed}
      width="100px"
      height="100px"
      style={{ display: "block", margin: "0 auto 5px"}}
    />
    <p className={classes.memberName}>{member.name}</p>
    <p className={classes.memberJob}>{member.bio}<span className={classes.memberCompany}> @{member.company}</span></p>
  </Fragment>
)
