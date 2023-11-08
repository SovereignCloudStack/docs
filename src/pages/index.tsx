import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'
import ContentCard from '../components/ContentCard'

const featureContentData = [
  {
    title: 'Introduction to SCS',
    body: 'Get to know SCS better and learn about the background.',
    url: '/docs',
    buttonText: 'Get Started'
  },
  {
    title: 'Releases',
    body: 'SCS is currently in Release 5. Check out the latest Release Notes.',
    url: '/docs/releases/Release5',
    buttonText: 'Learn More'
  },
  {
    title: 'Frequently Asked Questions',
    body: 'You are wondering what SCS is all about, what it can do and what it cant?',
    url: '/docs/faq',
    buttonText: 'Get Answers'
  },
  {
    title: 'Existing Public Clouds',
    body: 'There are public SCS compliant clouds in production.',
    url: '/standards/certification/overview#compliant-cloud-environments',
    buttonText: 'Test Them'
  }
]

const AdditionalResourcesData = [
  {
    title: 'Get in touch',
    body: 'Come into our Matrix Chat in the SCS | Tech Room.',
    url: 'https://matrix.to/#/#scs-tech:matrix.org',
    buttonText: 'Join Now'
  },
  {
    title: 'Come to our Meet-Ups',
    body: 'Our working groups and special interest groups meet weekly or biweekly. When? Find out within our public community calendar.',
    url: '/community/calendar',
    buttonText: 'Learn More'
  },
  {
    title: 'Standardization in progress',
    body: 'Get to know our current Decision Records and Standards.',
    url: '/standards',
    buttonText: 'Start Now'
  },
  {
    title: 'Deployment Examples',
    body: 'Get to know different ways to deploy SCS with cloud resources or on bare metal.',
    url: '/docs/category/deployment-examples',
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
            </div>
            <div className={`${styles.gradient} row`}>
              <div className="col col--3">
                <ContentCard
                  maxHeight
                  title="Ops Layer"
                  body="Tooling and infrastructure design for easy, efficient and transparent ways to operate an SCS Cloud."
                  buttonText="Learn More"
                  url="/docs/category/operating-scs"
                />
              </div>
              <div className="col col--6">
                <div style={{ marginBottom: '3rem' }}>
                  <ContentCard
                    title="Container Layer"
                    body="SCS offers a robust solution for managing container workloads on a Kubernetes infrastructure."
                    buttonText="Learn More"
                    url="/docs/container"
                    maxHeight
                  />
                </div>
                <ContentCard
                  title="IaaS Layer"
                  body="SCS offers OpenStack infrastructure solutions based on KVM virutalization to deploy VM workloads and enabling the container layer optionally."
                  buttonText="Learn More"
                  url="/docs/category/iaas-layer"
                />
              </div>
              <div className="col col--3">
                <ContentCard
                  maxHeight
                  title="IAM Layer"
                  body="Working on Keycloak federated identity provider within our Team IAM."
                  buttonText="Learn More"
                  url="/docs/category/identity-and-access-management-iam"
                />
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: '3rem' }}>
            <div className="col col--12">
              <h1>Additional Resources</h1>
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
