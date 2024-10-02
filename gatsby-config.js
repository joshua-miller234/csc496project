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
  },
  {
    resolve: "gatsby-source-graphql",
    options: {
      // This type will contain remote schema Query type
      typeName: "DrupalGraqhQL",
      // This is field under which it's accessible
      fieldName: "Drupal",
      // Url to query from
      // url: "http://kecatalog.dev.wwbtc.com/graphql",
      //  url: `http://10.89.0.11/graphql`,
      // url: `https://api.keeneland.com/graphql`,
      // url: "http://10.89.0.24/graphql",
      url: `https://csc496f24demo.tldr.dev/graphql`,
    },
  }
]
};