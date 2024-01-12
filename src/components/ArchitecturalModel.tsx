import React, { useEffect, useState } from 'react'
import ContentCard from './ContentCard'
import styles from './architecturalmodel.module.css'

interface ArchitecturalLayerItem {
  title: string
  body: string
  url: string
  buttonText: string
}

interface ArchitecturalLayerData {
  left: ArchitecturalLayerItem[]
  center: ArchitecturalLayerItem[]
  right: ArchitecturalLayerItem[]
}

interface ArchitecturalModelProps {
  jsonFilePath: string
}

const ArchitecturalModel: React.FunctionComponent<ArchitecturalModelProps> = ({
  jsonFilePath
}) => {
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
    <div className={`${styles.gradient} row`}>
      <div className="col col--3">
        {data.left.map((item) => (
          <ContentCard
            maxHeight
            title={item.title}
            body={item.body}
            buttonText={item.buttonText}
            url={item.url}
          />
        ))}
      </div>
      <div className="col col--6">
        {data.center.map((item) => (
          <div
            style={{
              marginBottom: item === data.center[0] ? '3rem' : '0'
            }}>
            <ContentCard
              title={item.title}
              body={item.body}
              buttonText={item.buttonText}
              url={item.url}
            />
          </div>
        ))}
      </div>
      <div className="col col--3">
        {data.right.map((item) => (
          <ContentCard
            maxHeight
            title={item.title}
            body={item.body}
            buttonText={item.buttonText}
            url={item.url}
          />
        ))}
      </div>
    </div>
  )
}

export default ArchitecturalModel
