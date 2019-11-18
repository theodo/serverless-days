module.exports = {
  siteMetadata: {
    title: `Serverless Days Paris - 14 April 2020`,
    description: `La journée de conférence dédiée au serverless.`,
    author: `Theodo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `talks`,
        path: `${__dirname}/src/talks`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Serverless Days Paris - 24 April 2020`,
        short_name: `sls days paris`,
        start_url: `/`,
        background_color: `#eff4ff`,
        theme_color: `#5267FF`,
        display: `minimal-ui`,
        icon: `src/images/unicorn_mascot.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
