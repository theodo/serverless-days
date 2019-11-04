import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TalkCard from "../components/talkCard"
import Location from "../components/location"
import Contact from "../components/contact"
import Title from "../components/title"
import CallForPaper from "../components/callForPaper"
import CallToAction from "../components/callToAction"
import Sponsors from "../components/sponsors"
import classes from "./index.module.scss"

export default function Template({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data
  const talks = edges.map(element => element.node.frontmatter)
  return (
    <Layout>
      <SEO />
      <Title />
      <CallForPaper />
      <ol className={classes.talksList} id="talks">
        {talks
          .sort((talk1, talk2) => new Date(talk1.hour) - new Date(talk2.hour))
          .map(talk => (
            <TalkCard {...talk} />
          ))}
      </ol>
      <CallToAction />
      <Sponsors id="sponsor" />
      <Location />
      <Contact id="contact" />
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
