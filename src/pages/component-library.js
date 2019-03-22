import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import { Card } from 'lib/Card'
import { Button } from 'lib/Button'
import { Spacer } from 'lib/Spacer'

const ComponentLibrary = () => (
  <Layout>
    <h1>H1 Header</h1>
    <h2>H2 Header</h2>
    <h3>H3 Header</h3>
    <h4>H4 Header</h4>
    <h5>H5 Header</h5>
    <p>
      Vestibulum iaculis dapibus metus, ut rutrum velit. Cras blandit lobortis
      nunc sit amet eleifend. Suspendisse potenti. Curabitur at aliquet orci.
      Aliquam at pulvinar enim. Curabitur erat enim, efficitur in sagittis id,
      pretium dictum nulla. Maecenas laoreet massa leo, a semper nisi tempus
      sed. Morbi diam dui, lacinia sed mollis pretium, sodales semper odio.
      Integer egestas tempus eros eget pharetra. In hac habitasse platea
      dictumst. Cras lacinia eros in diam vulputate pretium. In ut varius sem.
      Donec ac arcu at ligula sodales eleifend. Pellentesque dictum lacus lorem,
      vitae blandit libero aliquet et. Vestibulum suscipit augue vel diam
      lobortis, et tempus ligula laoreet.
    </p>
    <Card>
      <h3>Card</h3>
      <p>
        Vestibulum iaculis dapibus metus, ut rutrum velit. Cras blandit lobortis
        nunc sit amet eleifend. Suspendisse potenti. Curabitur at aliquet orci.
        Aliquam at pulvinar enim. Curabitur erat enim, efficitur in sagittis id,
        pretium dictum nulla.
      </p>
      <Spacer size="medium" />
    </Card>
    <Link to="/">Link back to the homepage</Link>

    <br />

    <Button type="Primary">Primary Button</Button>
    <Button type="Secondary">Secondary Button</Button>
  </Layout>
)

export default ComponentLibrary
