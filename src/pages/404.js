import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import SEO from 'components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Oh no!</h1>
    <p>{"Something's gone missing, or you're lost"}</p>
    <Link to="/">Go home</Link>
  </Layout>
)

export default NotFoundPage
