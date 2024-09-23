/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CSC496 Project - Joshua Miller`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image",
    "gatsby-plugin-sharp","gatsby-plugin-styled-components", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    // options: {
    //   "name": "pages",
    //   "path": "./src/pages/"
    // }
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
    ,
    __key: "pages"
  }]
};