import React from 'react'

import { Timeline, Row } from 'components/Timeline'
import { LayoutMobilePadding } from 'lib/LayoutMobilePadding'

export default () => {
  return (
    <LayoutMobilePadding>
      <Timeline>
        <Row
          title1="Dissertation Research"
          title2=""
          dateFrom="2019-03"
          current
          noEmphasis
        >
          Currently taking a break from work to focus on my MSc Computer Science
          Dissertation, aiming to rejoin the workforce in July/August 2019.
          <br />
          <br />
          This project is comprised of a series of outcome-prediction deep
          learning networks, assessed by predicting wins within the General
          Video Game AI framework.
        </Row>
        <Row
          title1="WonderBill"
          title2="Software Engineer"
          dateFrom="2018-01"
          dateTo="2019-03"
        >
          Full stack engineer working on all aspects of the product.
          {/*  */}
          <h4>Key projects:</h4>
          <ul>
            <li> Architected and built out push notifications end-to-end</li>
            <li> Managed React Native upgrades</li>
            <li>
              Supported and trained junior team members in all areas of the tech
              stack
            </li>
            <li>
              Frontend architect and developer for the in-app energy switching
              flow
            </li>
            <li>
              A key driver of agile & lean processes and process automation
            </li>
          </ul>
          {/*  */}
          <h4>Key technologies:</h4>
          <ul>
            <li>React, Redux, RXJS, Thunks, Flux pattern</li>
            <li>React Native, iOS & Android, Firebase</li>
            <li> ES6+</li>
            <li> Ruby, Rails 5, Sidekiq</li>
            <li> Go</li>
            <li> Postgres</li>
            <li> GitLab CI</li>
          </ul>
        </Row>
        <Row
          title1="Stratajet"
          title2="Software Engineer"
          dateFrom="2015-03"
          dateTo="2017-12"
        >
          Full-stack engineer building out tooling, data management, business
          intelligence, and the company's core product. Supported tooling for
          the data team, driving one of the most sophisticated online price
          calculation engines in the world.
          {/*  */}
          <h4>Key projects:</h4>
          <ul>
            <li>
              Architect & lead engineer on a data test suite and business logic
              modelling tool to check data entry correctness
            </li>
            <li>
              Architect & lead engineer on in-house project management
              integrations with Jira
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
            <li> .NET & .NET Core, ASP.NET Core</li>
            <li> React, Typescript, Webpack</li>
            <li> Docker, Systemd, Git</li>
            <li> MySQL</li>
            <li> Ruby & Ruby on Rails</li>
            <li> WPF, VSTO, MS Access & VBA</li>
          </ul>
        </Row>
        <Row
          title1="Squared Online (Google / HLC Partnership)"
          title2="Assistant Product Coordinator"
          dateFrom="2014-08"
          dateTo="2015-06"
        >
          Developed a number of tools to solve administrative and reporting
          problems. Worked with the wider team to help improve processes and
          delivery. Maintained & automated reports on business performance and
          to provide insight into the state of course delivery.
        </Row>
      </Timeline>
    </LayoutMobilePadding>
  )
}
