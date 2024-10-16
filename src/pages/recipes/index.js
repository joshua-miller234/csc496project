import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const RecipePage = ({data}) => {
  return (
    <Layout pageTitle="List of Recipe Titles">
        <ol style={{paddingLeft: '30px'}}>
            {
            data.Drupal.nodeRecipes.nodes.map((node) => (
              <Link to={`${node.path}`}>
                <article key={node.id}>
                  <li style={{color: 'black', fontSize: '25px'}}>
                    <h1 style={{fontSize: '25px', color: 'blue'}}>
                          <div>{node.title}</div>
                    </h1>
                    <div style={{fontSize: '15px'}}>Cooking Time: {node.cookingTime}</div>
                  </li>
                </article>
              </Link>
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
        path
        id
        cookingTime
      }
    }
  }
}
`


export const Head = () => <Seo title="Recipe List" />

export default RecipePage