import type { Props } from './types'

function Tags({ items }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item: string, index: number) => (
        <div className="py-1 px-2 rounded-md text-sm border border-transparent bg-zinc-900 hover:bg-zinc-700" key={index}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default Tags
