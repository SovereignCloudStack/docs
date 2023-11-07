import React, { CSSProperties } from 'react'
import styles from './contentcard.module.css'
import Link from '@docusaurus/Link'

interface ContentCardProps {
  title: string
  body: string
  url: string
  buttonText: string
  maxHeight?: boolean
}

const ContentCard: React.FunctionComponent<ContentCardProps> = (props) => {
  const { title, body, url, buttonText, maxHeight } = props

  return (
    <div className="card" style={maxHeight && { height: '100%' }}>
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>{body}</p>
      </div>
      <div className="card__footer">
        <Link className="button button--secondary button--lg" to={url}>
          {buttonText}
        </Link>
      </div>
    </div>
  )
}

export default ContentCard
