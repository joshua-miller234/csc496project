import * as React from 'react'
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Layout from '../components/layout'


const RecipeTemplate = ({ data }) => {
    return (<>
      <Layout pageTitle={data.Drupal.nodeRecipe.title}>
        <img src={data.Drupal.nodeRecipe.mediaImage.mediaImage.url} alt={`image of a ${data.Drupal.nodeRecipe.title}`} style={{width: '100%', minHeight: '400px'}}></img>
        <table style={{borderCollapse: 'separate', borderSpacing: '-1px'}}>
          <tr>
            <td style={{paddingRight: '10rem', paddingBottom: '0px'}}><h2>Preparation Time</h2></td>
            <td><h2>Difficulty</h2></td></tr>
          <tr>
            <td>{data.Drupal.nodeRecipe.preparationTime}</td>
            <td>{data.Drupal.nodeRecipe.difficulty}</td>
          </tr>
          <br></br>
          <tr>
            <td><h2>Number of Servings</h2></td>
            <td><h2>Cooking Time</h2></td>
          </tr>
          <tr>
            <td>{data.Drupal.nodeRecipe.numberOfServings}</td>
            <td>{data.Drupal.nodeRecipe.cookingTime}</td>
          </tr>
          <br></br>
        </table>


        <h2>Ingredients</h2>
        <ol data-testid="data-component" style={{paddingLeft: '30px'}}>
        {
          data.Drupal.nodeRecipe.ingredients.map((ingredient) => {
            return (<li dangerouslySetInnerHTML={{ __html: ingredient}}></li>)
          })
        }
        </ol>

        <br></br>
        <h2>Instructions</h2>
        <p dangerouslySetInnerHTML={{ __html: data.Drupal.nodeRecipe.recipeInstruction.processed}}  style={{paddingLeft: '30px'}}></p>
      </Layout>
    </>)
      
      
    
}


export const Head = ({ data }) => <Seo title={data.Drupal.nodeRecipe.title} />

export default RecipeTemplate

export const query = graphql`
query MyQuery($id: ID!) {
  Drupal {
    nodeRecipe(id: $id) {
      title
      ingredients
      difficulty
      preparationTime
      numberOfServings
      cookingTime
      recipeInstruction {
        processed
      }
      mediaImage {
        mediaImage {
          url
        }
      }
    }
  }
}
`

