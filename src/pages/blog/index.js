import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import {boxedLink} from '../../components/layout.module.css'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
        {
        data.allMdx.nodes.map((node) => (
          <Link to={`/blog/${node.frontmatter.slug}`}>
            <article key={node.id} className={boxedLink}>
              <h2>
                  {node.frontmatter.title}
              </h2>
              <p style={{color: 'black'}}>Posted: {node.frontmatter.date}</p>
            </article>
          </Link>
        ))
      }
    </Layout>
  )
}


export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`


export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage