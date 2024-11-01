import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial. A small site for a CSC496 course. This text was updated using GitHub Actions. This text was added to test atomic updates with github actions</p>
      <StaticImage
        alt="Image of two orange cats laying on a towel in the sun."
        src="../images/IMG_1650.jpg"
      />
    </Layout>
  )
}

// export const Head = () => <title>Home Page</title>
export const Head = () => <Seo title="Home Page" />

export default IndexPage