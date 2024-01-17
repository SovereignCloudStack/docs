import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import ContentCard from '../components/ContentCard'
import ArchitecturalModel from '../components/ArchitecturalModel'

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
  const [featureContent, setFeatureContent] = useState([])
  const [additionalResources, setAdditionalResources] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const featureResponse = await fetch('/data/featureContentData.json')
        const featureData = await featureResponse.json()
        setFeatureContent(featureData)

        const resourcesResponse = await fetch(
          '/data/additionalResourcesData.json'
        )
        const resourcesData = await resourcesResponse.json()
        setAdditionalResources(resourcesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

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
            {featureContent.map((card, index) => (
              <div className="col col--3" key={index}>
                <ContentCard
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
            <div style={{ marginLeft: '16px', marginRight: '16px' }}>
              <ArchitecturalModel
                topLayers
                jsonFilePath="data/architecturalOverviewData.json"
              />
            </div>
          </div>
          <div className="row" style={{ marginTop: '3rem' }}>
            <div className="col col--12">
              <h1>Additional Resources</h1>
            </div>
          </div>
          <div className="row" style={{ marginBottom: '5rem' }}>
            {additionalResources.map((card, index) => (
              <div className="col col--3" key={index}>
                <ContentCard
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
