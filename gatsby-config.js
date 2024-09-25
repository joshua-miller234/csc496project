/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: 
  [
    "gatsby-plugin-image","gatsby-plugin-sharp","gatsby-plugin-styled-components", "gatsby-plugin-mdx", 
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      // options: {
      //   "name": "pages",
      //   "path": "./src/pages/"
      // }
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
      , __key: "pages"
  }
]
};