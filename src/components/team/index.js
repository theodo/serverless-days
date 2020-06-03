import React, { Fragment } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import classes from "./styles.module.scss"

const Team = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(orgs)/" } }
        sort: { fields: [frontmatter___name], order: ASC }
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
  const orgs = data.allMarkdownRemark.edges.map(
    element => element.node.frontmatter
  )

  return (
    <div className={classes.container}>
      <h2>
        <FormattedMessage id="team.title" />
      </h2>
      <ul className={classes.membersList}>
        {orgs.map(organizer => (
          <li className={classes.member}>
            <Member member={organizer} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Team

const Member = ({ member }) => (
  <Fragment>
    <Img
      fixed={member.picture.childImageSharp.fixed}
      width="100px"
      height="100px"
      style={{ display: "block", margin: "0 auto 5px" }}
    />
    <div className={classes.memberName}>{member.name}</div>
    <div className={classes.memberJob}>
      {member.bio}
      <span className={classes.memberCompany}> @{member.company}</span>
    </div>
  </Fragment>
)
