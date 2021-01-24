import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/layout/image"
import SEO from "../components/layout/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/llmdx/examples/cat-dog/">simple MDX demo: Cat/Dog</Link>
    <Link to="/resources/tools/gatsby/mk-gatsby-steps/04-generating-pages-from-content/">Sample md log of Gatsby dev</Link>
  </Layout>
)

export default IndexPage
