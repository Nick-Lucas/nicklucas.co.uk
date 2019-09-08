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
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: true,
              numberLines: true,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              // languageExtensions: [
              //   {
              //     language: 'superscript',
              //     extend: 'javascript',
              //     definition: {
              //       superscript_types: /(SuperType)/,
              //     },
              //     insertBefore: {
              //       function: {
              //         superscript_keywords: /(superif|superelse)/,
              //       },
              //     },
              //   },
              // ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
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
