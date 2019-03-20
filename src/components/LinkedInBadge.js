import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Container = styled.div`
  margin: 1rem;
`

export const LinkedInBadge = () => {
  return (
    <Container>
      <Helmet>
        <script
          type="text/javascript"
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
        />
      </Helmet>

      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale="en_US"
        data-type="vertical"
        data-theme="dark"
        data-vanity="nicholasjlucas"
      >
        {/* <a
          className="LI-simple-link"
          href="https://uk.linkedin.com/in/nicholasjlucas?trk=profile-badge"
        >
          Nick Lucas
        </a> */}
      </div>
    </Container>
  )
}
