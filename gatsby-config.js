/*eslint-env node*/

module.exports = {
  siteMetadata: {
    title: `Nick Lucas`,
    description: `Full-stack problem solver`,
    author: `Nick Lucas`,
  },

  // gh-pages configuration, not required once migrated to full deployment
  pathPrefix: '/nicklucas.co.uk',

  // dev proxy
  proxy: {
    prefix: '/.netlify/functions',
    url: 'http://localhost:9000',
  },

  plugins: [
    // Defaults
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nick Lucas`,
        short_name: `NL`,
        start_url: `/`,
        icon: `src/images/headshot.jpeg`,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          pathToSlugField: 'frontmatter.path',
          heading: null,
          maxDepth: 6,
        },
      },
    },

    // Coding resources
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans`,
          `roboto`,
          `source sans pro`,

          // https://medium.com/@joshuacrass/material-icon-font-with-gatsby-af620c46c041
          'material icons',
        ],
      },
    },

    // Content resources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },

    // Netlify configuration
    `gatsby-plugin-netlify`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
