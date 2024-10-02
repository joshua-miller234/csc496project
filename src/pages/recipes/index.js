import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="List of Recipe Titles">
        <ol>
            {
            data.Drupal.nodeRecipes.nodes.map((node) => (
            <article key={node.id}>
                <h1>
                    <li>
                        {node.title}
                    </li>
                </h1>
            </article>
            ))
        }
      </ol>
    </Layout>
  )
}


export const query = graphql`
  query {
  Drupal {
    nodeRecipes(first: 10) {
      nodes {
        title
      }
    }
  }
}
`


export const Head = () => <Seo title="Recipe List" />

export default BlogPage