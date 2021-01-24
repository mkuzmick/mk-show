require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `MK Gatsby`,
    description: `Another daily Gatsby project.`,
    author: `mk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/content/resources`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shows`,
        path: `${__dirname}/content/shows`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `llmdx`,
        path: `${__dirname}/content/llmdx`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `glossary`,
        path: `${__dirname}/content/glossary`,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // add default layouts once you have them
        // defaultLayouts: {
        //  resources: require.resolve("./src/components/layouts/mdx-layout-resource.js"),
      //  default: require.resolve("./src/components/layouts/mdx-layout-basic.js"),
      },
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 960,
          },
        },
      ],
    },
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "Pokémon",
          },
        ]
      }
    }, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
