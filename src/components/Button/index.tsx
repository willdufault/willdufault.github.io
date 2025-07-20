import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Props } from './types'

function Button({ url, icon, children }: Props) {
  /**
   * Render the icon.
   * @param icon The icon definition.
   * @returns The icon.
   */
  function renderIcon(icon: IconDefinition | undefined) {
    if (icon !== undefined) {
      return <FontAwesomeIcon icon={icon} />
    }
  }

  return (
    <a
      className="px-4 py-2 cursor-pointer rounded-md flex gap-2 items-center border border-zinc-600 bg-zinc-900 hover:border-zinc-400 hover:bg-zinc-700"
      href={url}
    >
      {renderIcon(icon)}
      {children}
    </a>
  )
}

export default Button
