import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";

const Header = styled.div`
  background: blue;
  margin-bottom: 1.45rem;
`

const HeaderComponent = ({ siteTitle }) => (
  <Header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Header>
)

HeaderComponent.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderComponent.defaultProps = {
  siteTitle: ``,
}

export default HeaderComponent
