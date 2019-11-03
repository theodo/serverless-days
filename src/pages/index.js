import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TalkCard from "../components/talkCard"
import classes from "./index.module.scss"

export default function Template({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data
  const talks = edges.map(element => element.node.frontmatter)
  return (
    <Layout>
      <SEO title="Home" />
      <ol className={classes.talksList}>
        {talks.map(talk => (
          <TalkCard {...talk} />
        ))}
      </ol>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            hour
            title
            description
            biographie
            name
            job
            company
            picture {
              childImageSharp {
                fixed(width: 43, height: 43) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            linkedin
            twitter
            instagram
            facebook
          }
        }
      }
    }
  }
`
