import React, { CSSProperties } from 'react'
import styles from './contentcard.module.css'
import Link from '@docusaurus/Link'
import { useLocation } from '@docusaurus/router'

interface LayerComponent {
  title: string
  url: string
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
  console.log(location.pathname)

  return (
    <div style={style} className={`${styles.contentCard} card`}>
      <div className="card__header">
        {small ? <h5>{title}</h5> : <h3>{title}</h3>}
      </div>
      <div className="card__body">
        <p>{body}</p>
      </div>
      <div style={{ display: 'flex' }}>
        {components &&
          components.map((component) => (
            <Link to={component.url}>
              <div
                style={
                  location.pathname == component.url
                    ? {
                        background: 'rgba(0, 97, 255, 0.5)',
                        color: '#FFF'
                      }
                    : {}
                }
                className={styles.layerComponent}>
                {component.title}
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
