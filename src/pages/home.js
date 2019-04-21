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

        <h4>
          I'm a full-stack software engineer and passionate problem solver
        </h4>
        <p>
          I've been building valuable business tools and experiences since 2014,
          making teams more efficient and effective, and working to create
          fantastic experiences for the customer. I love making customer's lives
          better, and working with teams to automate workloads so they can focus
          on what really matters.
        </p>

        <h2>What have I done?</h2>
        <p>
          Professionally I've worked on internal tooling for data entry and data
          analysis, as well as full-stack mobile application for consumers. I've
          designed complex & efficient data processing systems for identifying
          costly mistakes, and implemented key systems end-to-end such as mobile
          push notifications.
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
          </a>{' '}
          which is a git terminal with built in GUI-like visualisation; a tool I
          use every day.
        </p>

        <Button to="/projects/">See more projects</Button>

        <h2>What have I learned?</h2>
        <ul>
          <li>
            <strong>Use the right tool for the job:</strong> Technologies should
            be assessed and chosen for the task at hand, and I've worked across
            a wide range of technologies and disciplines in the pursuit of this
            belief
          </li>
          <li>
            <strong>Sensible and lean processes, with team buy-in:</strong>{' '}
            Processes are there to help the team succeed, they should augment
            good communication, and the whole team should understand their
            purpose
          </li>
          <li>
            <strong>Autonomy & trust:</strong> People are smart, and given an
            understanding of their goals will find ways to reach them. Engineers
            should be trusted to solve problems, and have the ability to pursue
            potentially valuable ideas.
          </li>
        </ul>

        <Spacer size="large" />
      </Section>
    </>
  )
}

export default Home
