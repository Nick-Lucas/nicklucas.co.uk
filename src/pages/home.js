import React from 'react'

import SEO from 'components/seo'
import { Section } from 'lib/Section'
import { Spacer } from 'lib/Spacer'
import { Button } from 'lib/Button'

const Home = () => {
  return (
    <>
      <SEO
        keywords={[
          `nick lucas`,
          `software developer`,
          `software engineer`,
          `london`,
        ]}
      />

      <Section>
        <h1>Welcome!</h1>

        <h4>I'm a full-stack problem solver</h4>
        <p>
          As a software engineer, I've been building valuable business tools and
          experiences since 2014, making teams more efficient and effective, and
          working to create fantastic experiences for the customer. I love
          making customer's lives better, and working with teams to automate
          workloads so they can focus on exactly that.
        </p>

        <h2>What have I done?</h2>
        <p>
          Professionally I've worked on internal tooling for data entry and data
          analysis, as well as full-stack mobile development for consumers. I've
          designed complex data analysis for identifying costly mistakes, and
          implemented key systems end-to-end such as mobile push notifications.
        </p>

        <Button to="/roles/">See more of my experience</Button>

        <p>
          As a hobbyist, I am a regular OSS contributor, and have built a number
          of open source solutions from scratch. For instance{' '}
          <a
            href="https://github.com/Nick-Lucas/giterm"
            target="_blank"
            rel="noopener noreferrer"
          >
            giterm
          </a>
          , a git terminal with built in GUI-like visualisation; a tool I use
          every day.
        </p>

        <Button to="/projects/">See more projects</Button>

        <Spacer size="small" />
      </Section>
    </>
  )
}

export default Home
