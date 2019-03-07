import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'

const ComponentLibrary = () => (
  <Layout>
    <h1>H1 Header</h1>
    <h2>H2 Header</h2>
    <h3>H3 Header</h3>
    <h4>H4 Header</h4>
    <h5>H5 Header</h5>
    <p>Body text</p>
    <Link to="/">Link back to the homepage</Link>
  </Layout>
)

export default ComponentLibrary
