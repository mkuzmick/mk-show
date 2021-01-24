import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Seo from "../components/layout/seo-mdx"
import { Styled } from "theme-ui"

const shortcodes = { Link } // Provide common components here

function replacer(key, value) {
  // Filtering out properties
  if (key === 'body') {
    return `${value.substring(0, 32)} . . .`;
  }
  return value;
}

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div
      style={{
        padding: "1em",
        width: "90%",
        margin: "auto"
      }}
    >
      <Seo image={mdx.fields.mainImage} />
      <Styled.h1>{mdx.fields.title}</Styled.h1>
      <p>got your mdx right here</p>
      <Styled.pre>{JSON.stringify(mdx, replacer, 4)}</Styled.pre>
      <p>but here's how it will actually look once parsed...</p>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fileAbsolutePath
      fields {
        slug
        pageType
        title
        mainImage
      }
      excerpt
      tableOfContents
      timeToRead
    }
  }
`