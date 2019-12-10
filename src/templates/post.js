import React from "react"
import { graphql } from "gatsby"

import classes from "./styles.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO />
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>{frontmatter.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
        slug
      }
    }
  }
`