import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import {boxedLink} from '../../components/layout.module.css'

const ArticlePage = ({data}) => {
  return (
    <Layout pageTitle="List of Articles">
            {
            data.Drupal.nodeArticles.nodes.map((node) => (
              <Link to={`${node.path}`}>
                <article key={node.id} className={boxedLink}>
                    <h1>
                      <div style={{color: 'blue'}}>{node.title}</div>
                    </h1>
                    <p style={{color: 'black'}}>Author: {node.author.displayName}</p>
                </article>
              </Link>
            ))
        }
    </Layout>
  )
}


export const query = graphql`
  query {
  Drupal {
    nodeArticles(first: 10) {
      nodes {
        title
        path
        id
        author {
          displayName
        }
      }
    }
  }
}
`


export const Head = () => <Seo title="Articles" />

export default ArticlePage