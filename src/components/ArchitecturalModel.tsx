import React, { useEffect, useState } from 'react'
import ContentCard from './ContentCard'
import styles from './architecturalmodel.module.css'

interface ArchitecturalLayerItem {
  title: string
  body: string
  url: string
  buttonText: string
  components?: []
}

interface ArchitecturalLayerData {
  ops: ArchitecturalLayerItem[]
  container: ArchitecturalLayerItem[]
  iaas: ArchitecturalLayerItem[]
  iam: ArchitecturalLayerItem[]
}

interface ArchitecturalModelProps {
  jsonFilePath: string
  topLayers?: boolean
}

const ArchitecturalModel: React.FunctionComponent<ArchitecturalModelProps> = (
  props
) => {
  const { jsonFilePath, topLayers } = props
  const [data, setData] = useState<ArchitecturalLayerData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(jsonFilePath)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = (await response.json()) as ArchitecturalLayerData
        setData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [jsonFilePath])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!data) {
    return <div>No data available.</div>
  }

  return (
    <div className={`${styles.gradient} ${styles.border} row`}>
      <div
        style={{ padding: '8px 8px 8px 8px', margin: '0 0 0 0' }}
        className={`${styles.bottom} col col--3`}>
        {data.ops.map((layer) => (
          <ContentCard
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
        {data.container.map((layer) => (
          <div
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
        {data.iaas.map((layer) => (
          <div>
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
        {data.iam.map((layer) => (
          <ContentCard
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
  )
}

export default ArchitecturalModel
