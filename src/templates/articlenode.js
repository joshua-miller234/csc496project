import * as React from 'react'
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import "../components/layout.module.css"
import Layout from '../components/layout'

const ArticleTemplate = ({ data }) => {

    return (<>
      <Layout pageTitle={data.Drupal.nodeArticle.title}>
        <p>Author: {data.Drupal.nodeArticle.author.displayName}</p>
        <p>Created: {new Date(data.Drupal.nodeArticle.created).toDateString()}</p>
        <p><img src={data.Drupal.nodeArticle.mediaImage.mediaImage.url} alt={`Hero image for article ${data.Drupal.nodeArticle.title}`} style={{width: '100%', minHeight: '400px'}}></img></p>
        <p dangerouslySetInnerHTML={{ __html: data.Drupal.nodeArticle.body.processed}}></p>
      </Layout>
    </>)
      
      
    
}

export const Head = ({ data }) => <Seo title={data.Drupal.nodeArticle.title} />

export default ArticleTemplate

export const query = graphql`
query ($id: ID!){
  Drupal {
    nodeArticle(id: $id) {
      title
      body {
        processed
      }
      path
      mediaImage {
        mediaImage {
          url
        }
      }
      author {
        displayName
      }
      created
    }
  }
}
`

