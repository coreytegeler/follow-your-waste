/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Follow Your Waste`,
    lang: `en`,
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Follow Your Waste`,
        short_name: `Follow Your Waste`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fc652c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `src/images/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ]
      }
    },
    // 'gatsby-plugin-offline'
    // 'gatsby-plugin-remove-serviceworker'
  ],
};