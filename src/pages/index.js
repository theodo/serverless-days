import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TalkCardItem from "../components/talkCard"
import Location from "../components/location"
import Contact from "../components/contact"
import Tickets from "../components/tickets"
import Team from "../components/team"
import Title from "../components/title"
import Sponsors from "../components/sponsors"
import CallForPaper from "../components/callForPaper"
import Streams from "../components/streams"

import DialogContent from "../components/dialogContent"
import Dialog from "@material-ui/core/Dialog"

import classes from "./index.module.scss"
import talkLogo from "../images/talks.svg"

export default function Template({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data

  return (
    <Layout>
      <SEO />
      <Title />
      <Tickets id="tickets" />
      <CallForPaper id="cfp" />
      <Location id="location" />
      <Streams id="streams" />
      <Team id="team" />
      <Contact id="contact" />
      <Sponsors id="sponsor" />
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
