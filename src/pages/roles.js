import React from 'react'
import styled from 'styled-components'

import { Timeline, Row } from 'components/Timeline'
import { Section } from 'lib/Section'
import { Spacer } from 'lib/Spacer'

const Container = styled(Section)`
  padding-left: 1rem;
`

export default () => {
  return (
    <Container>
      <Timeline>
        <Spacer size="large" />
        <Row title1="WonderBill" title2="Software Engineer">
          Full stack engineer working on all aspects of the product.
          {/*  */}
          <h4>Key projects:</h4>
          <ul>
            <li> Architected and built out push notifications end-to-end</li>
            <li> Maintained React Native installation and upgrades</li>
            <li>
              Supported and trained junior team members in all areas of the tech
              stack
            </li>
            <li>
              Frontend architect and developer for the in-app energy switching
              flow
            </li>
            <li>
              A key driver of sensible processes & automation to manage team
              problems
            </li>
          </ul>
          {/*  */}
          <h4>Key technologies:</h4>
          <ul>
            <li> React, Redux, RXJS, Thunks, Firebase</li>
            <li> React Native, iOS & Android</li>
            <li> ES6+</li>
            <li> Ruby, Rails 5, Sidekiq</li>
            <li> Go</li>
            <li> Postgres</li>
            <li> GitLab CI</li>
          </ul>
        </Row>
        <Row title1="Stratajet" title2="Software Engineer">
          Full stack engineer building out tooling, data management, business
          intelligence, and the company's core product.
          {/*  */}
          <h4>Roles:</h4>
          <ul>
            <li>
              Supported a 10-strong team of data researchers driving one of the
              most sophisticated online price calculation engines in the world
            </li>
            <li>
              Developer of the company's pricing system and supply side product.
            </li>
          </ul>
          {/*  */}
          <h4>Key projects:</h4>
          <ul>
            <li>
              Architect & sole developer on a data test suite and business logic
              modelling tool to check data entry correctness
            </li>
            <li>
              Architect & sole developer on project management tools used to
              track the progress of data research
            </li>
            <li>
              Built out data warehousing to track progress of milestones and
              provide insight into company data
            </li>
            <li>Developer for the core API & Pricing system</li>
            <li>Owner of a key data entry system</li>
          </ul>
          {/*  */}
          <h4>Key technologies:</h4>
          <ul>
            <li> .NET & .NET Core, WPF, ASP.NET Core</li>
            <li> React, Typescript, Webpack</li>
            <li> Docker, Systemd, Git</li>
            <li> MySQL</li>
            <li> Ruby & Ruby on Rails</li>
            <li> MS Access & VBA</li>
          </ul>
        </Row>
        <Row
          title1="Squared Online (Google / HLC Partnership)"
          title2="Assistant Product Coordinator"
        >
          Developed a number of tools to solve administrative and reporting
          problems, and worked with the wider team to help improve processes and
          delivery. Maintained & automated reports on business performance and
          to provide insight into the state of course delivery.
        </Row>
        <Row
          title1="Squared Online (Google / HLC Partnership)"
          title2="Support Coordinator"
        >
          Student support and running of the day to day course, class
          facilitation. Developed the company's reporting system and tools for
          assisting in admin processes and student management.
        </Row>
      </Timeline>
    </Container>
  )
}
