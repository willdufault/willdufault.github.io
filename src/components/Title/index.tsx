import type { Props } from './types'

function Title({ children }: Props) {
  return <h1 className="font-bold text-2xl mb-4">{children}</h1>
}

export default Title
