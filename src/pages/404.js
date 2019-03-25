import React from 'react'
import { Link } from 'gatsby'

import SEO from 'components/seo'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>Oh no!</h1>
    <p>{"Something's gone missing, or you're lost"}</p>
    <Link to="/">Go home</Link>
  </>
)

export default NotFoundPage
