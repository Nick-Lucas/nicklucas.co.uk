import React from 'react'

import SEO from 'components/seo'
import { Section } from 'lib/Section'
import { SocialStrip } from 'components/SocialStrip'

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
          As a software engineer, I'm experienced in architecting and building
          within greenfield and brownfield environments. I believe in choosing
          the right tools for the job, making decisions with data, and
          automating to let teams focus on what's most important.
        </p>

        <p>
          Professionally I've worked on internal tooling for data entry and data
          analysis, as well as full-stack mobile development for consumers. I've
          designed complex data analysis for identifying costly mistakes, and
          implemented key systems end-to-end such as mobile push notifications.
        </p>

        <p>
          As a hobbyist, I'm a regular OSS contributor, and have built a number
          of open source solutions from scratch. For instance{' '}
          <a
            href="https://github.com/Nick-Lucas/giterm"
            target="_blank"
            rel="noopener noreferrer"
          >
            giterm
          </a>
          , a git terminal with built in GUI-like visualisation, which I use
          every day.
        </p>
      </Section>

      <Section padding={1}>
        <SocialStrip />
      </Section>
    </>
  )
}

export default Home
