import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import type { ReactNode } from 'react'

export type Props = {
  icon?: IconDefinition
  url?: string
  children: ReactNode
}
