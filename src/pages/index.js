import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TalkCard from "../components/talkCard"
import classes from "./index.module.scss"

export default function Template({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data
  const talks = edges.map(element => element.node.frontmatter)
  console.log(talks)
  return (
    <Layout>
      <SEO title="Home" />
      <Image />
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
            picture
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
