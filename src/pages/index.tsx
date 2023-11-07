import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'
import ContentCard from '../components/ContentCard'

const featureContentData = [
  {
    title: 'Test the Reference Implementation',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    url: '/docs',
    buttonText: 'Get Started'
  },
  {
    title: 'Upgrade Guides',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    url: '2',
    buttonText: 'Dive Deeper'
  },
  {
    title: 'Introduction to SCS',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    url: '3',
    buttonText: 'Start Now'
  },
  {
    title: 'Deployment Examples',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    url: '4',
    buttonText: 'Explore Cases'
  }
]

const AdditionalResourcesData = [
  {
    title: 'Test the Reference Implementation',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    url: '/docs',
    buttonText: 'Get Started'
  },
  {
    title: 'Upgrade Guides',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    url: '2',
    buttonText: 'Dive Deeper'
  },
  {
    title: 'Introduction to SCS',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    url: '3',
    buttonText: 'Start Now'
  },
  {
    title: 'Deployment Examples',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    url: '4',
    buttonText: 'Explore Cases'
  }
]

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout description="Documentation and Community Platform for the Sovereign Cloud Stack">
      <main>
        <div className="container">
          <div className="row" style={{ marginTop: '2rem' }}>
            <div className="col col--12">
              <h1>Welcome to the SCS Documentation</h1>
              <p>
                Find user guides, code samples, deployment examples, reference,
                community pages and more.
              </p>
            </div>
          </div>
          <div className="row">
            {featureContentData.map((card, index) => (
              <div className="col col--3" key={index}>
                <ContentCard
                  maxHeight
                  title={card.title}
                  body={card.body}
                  url={card.url}
                  buttonText={card.buttonText}
                />
              </div>
            ))}
          </div>
          <div className="row" style={{ marginTop: '3rem' }}>
            <div className="col col--12">
              <h1>Architectural Layers</h1>
              <p>
                Find user guides, code samples, deployment examples, reference,
                community pages and more.
              </p>
            </div>
            <div className={`${styles.gradient} row`}>
              <div className="col col--3">
                <ContentCard
                  maxHeight
                  title="Ops Layer"
                  body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                  buttonText="Learn More"
                  url="/doc/ops"
                />
              </div>
              <div className="col col--6">
                <div style={{ marginBottom: '3rem' }}>
                  <ContentCard
                    title="Container Layer"
                    body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                    buttonText="Learn More"
                    url="/doc/ops"
                    maxHeight
                  />
                </div>
                <ContentCard
                  title="IaaS Layer"
                  body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                  buttonText="Learn More"
                  url="/doc/ops"
                />
              </div>
              <div className="col col--3">
                <ContentCard
                  maxHeight
                  title="IAM Layer"
                  body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                  buttonText="Learn More"
                  url="/doc/ops"
                />
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: '3rem' }}>
            <div className="col col--12">
              <h1>Additional Resources</h1>
              <p>
                Find user guides, code samples, deployment examples, reference,
                community pages and more.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginBottom: '5rem' }}>
            {AdditionalResourcesData.map((card, index) => (
              <div className="col col--3" key={index}>
                <ContentCard
                  maxHeight
                  title={card.title}
                  body={card.body}
                  url={card.url}
                  buttonText={card.buttonText}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}
