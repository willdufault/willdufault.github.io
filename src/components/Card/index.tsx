import type { Props } from './types'

function Card({ children, hover = false }: Props) {
  return (
    <article
      className={`rounded-md p-4 bg-zinc-800 ${
        hover ? 'hover:bg-zinc-700' : ''
      }`}
    >
      {children}
    </article>
  )
}

export default Card
