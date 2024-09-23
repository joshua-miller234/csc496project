// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

// export const Head = () => (
//     <>
//       <title>About Me</title>
//       <meta name="description" content="Your description" />
//     </>
//   )

  export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage