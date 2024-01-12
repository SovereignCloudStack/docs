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

  useEffect(() => {
    fetch(jsonFilePath) // Use the jsonFilePath prop
      .then((response) => response.json())
      .then((data: ArchitecturalLayerData) => setData(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [jsonFilePath]) // Dependency array includes jsonFilePath

  if (!data) {
    return <div>Loading...</div>
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
