import React from 'react'
import { CardLeader, NameSubitle, NameTitle } from './styles'

interface LeaderCardProps {
    src: string
    title: string
    subtitle: string
}

export default function LeaderCard({src, title, subtitle}: LeaderCardProps) {
  return (
    <CardLeader>
        <img
            src={src}
            style={{
                width: '225px',
                height: 'auto',
                borderRadius: '50%'
            }}
        />
        <NameTitle>
            {title}
        </NameTitle>
        <NameSubitle>
            {subtitle}
        </NameSubitle>
    </CardLeader>
  )
}