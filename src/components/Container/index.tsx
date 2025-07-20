import type { Props } from './types'

function Container({ children }: Props) {
  return <div className="max-w-screen-md mx-auto px-4 sm:px-8 lg:px-0">{children}</div>
}

export default Container
