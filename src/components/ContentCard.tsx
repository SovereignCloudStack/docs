import React, { CSSProperties } from 'react'
import styles from './contentcard.module.css'
import Link from '@docusaurus/Link'
import { useLocation } from '@docusaurus/router'

interface LayerComponent {
  title: string
  url: string
  mandatory: string
  stable: string
}

interface ContentCardProps {
  style?: React.CSSProperties
  title: string
  body: string
  url: string
  buttonText: string
  small?: boolean
  components?: LayerComponent[]
}

const ContentCard: React.FunctionComponent<ContentCardProps> = (props) => {
  const { title, body, url, buttonText, style, small, components } = props

  const location = useLocation()

  return (
    <div style={style} className={`${styles.contentCard} card`}>
      <div className="card__header">
        {small ? (
          <h5 style={{ marginLeft: '-6px' }}>{title}</h5>
        ) : (
          <h3>{title}</h3>
        )}
      </div>
      <div className="card__body">
        <p>{body}</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {components &&
          components.map((component, index) => (
            <Link to={component.url} key={index}>
              <div
                style={
                  location.pathname == component.url
                    ? {
                        color: 'blue',
                        backgroundColor: '#0066ff44'
                      }
                    : {}
                }
                className={
                  component.stable == 'true'
                    ? styles.layerComponent
                    : styles.layerComponentWip
                }>
                {component.title}
                {/* {component.mandatory == 'true' ? (
                  <div className={styles.chipMandatory}>mandatory</div>
                ) : (
                  <div className={styles.chipOptional}>optional</div>
                )} */}
              </div>
            </Link>
          ))}
      </div>
      {buttonText && (
        <div className="card__footer">
          <Link className="button button--secondary button--md" to={url}>
            {buttonText}
          </Link>
        </div>
      )}
    </div>
  )
}

export default ContentCard
