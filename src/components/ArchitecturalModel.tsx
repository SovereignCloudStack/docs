import React, { useEffect, useState } from 'react'
import ContentCard from './ContentCard'
import styles from './architecturalmodel.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { GlobalData } from '../pages'

interface ArchitecturalLayerItem {
  title: string
  body: string
  url: string
  buttonText: string
  components?: []
}

export interface ArchitecturalLayerData {
  ops: ArchitecturalLayerItem[]
  container: ArchitecturalLayerItem[]
  iaas: ArchitecturalLayerItem[]
  iam: ArchitecturalLayerItem[]
}

interface ArchitecturalModelProps {
  topLayers?: boolean
}

const ArchitecturalModel: React.FunctionComponent<ArchitecturalModelProps> = (
  props
) => {
  const { topLayers } = props
  const context = useDocusaurusContext()
  const globalData = context.globalData as unknown as GlobalData
  const data =
    globalData['global-data-plugin'].default.architecturalOverviewData

  if (!data) {
    return <div>No data available.</div>
  }

  return (
    <div className={`${styles.gradient} ${styles.border} row`}>
      {!topLayers && (
        <div
          style={{
            display: 'flex',
            margin: ' 10px 0 4px 12px'
          }}>
          <h5 style={{ marginBottom: 0 }}>SCS Component Map</h5>
        </div>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div
          style={{ padding: '8px 8px 8px 8px', margin: '0 0 0 0' }}
          className={`${styles.bottom} col col--3`}>
          {data.ops.map((layer, index) => (
            <ContentCard
              key={index}
              small={!topLayers}
              style={topLayers && { height: '100%' }}
              title={layer.title}
              body={topLayers && layer.body}
              buttonText={topLayers && layer.buttonText}
              url={layer.url}
              components={!topLayers && layer.components}
            />
          ))}
        </div>
        <div
          className="col col--6"
          style={{ padding: '8px 8px 8px 8px', margin: '0 0 0 0' }}>
          {data.container.map((layer, index) => (
            <div
              key={index}
              style={{
                marginBottom: layer === data.container[0] ? '8px' : '0'
              }}>
              <ContentCard
                small={!topLayers}
                style={topLayers && { height: '100%' }}
                title={layer.title}
                body={topLayers && layer.body}
                buttonText={topLayers && layer.buttonText}
                url={layer.url}
                components={!topLayers && layer.components}
              />
            </div>
          ))}
          {data.iaas.map((layer, index) => (
            <div key={index}>
              <ContentCard
                small={!topLayers}
                style={topLayers && { height: '100%' }}
                title={layer.title}
                body={topLayers && layer.body}
                buttonText={topLayers && layer.buttonText}
                url={layer.url}
                components={!topLayers && layer.components}
              />
            </div>
          ))}
        </div>
        <div
          className="col col--3"
          style={{ padding: '8px 8px 8px 8px', margin: '0 0 0 0' }}>
          {data.iam.map((layer, index) => (
            <ContentCard
              key={index}
              small={!topLayers}
              style={topLayers && { height: '100%' }}
              title={layer.title}
              body={topLayers && layer.body}
              buttonText={topLayers && layer.buttonText}
              url={layer.url}
              components={!topLayers && layer.components}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArchitecturalModel
