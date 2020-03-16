import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Canceled from "../components/canceled"

export default function Template({ data }) {

  const {
    allMarkdownRemark: { edges },
  } = data

  return (
    <Layout>
      <SEO />
      <Canceled />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___hour], order: ASC }
      filter: { fileAbsolutePath: { regex: "/(talks)/.*/" } }
    ) {
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
                small: fixed(width: 43, height: 43, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
                medium: fluid(maxWidth: 164, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
                large: fixed(width: 398, height: 200, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            linkedin
            twitter
            instagram
            facebook
            isParty
          }
        }
      }
    }
  }
`
