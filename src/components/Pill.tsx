import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Pill({ children }: Props) {
  return (
    <span className="text-sm text-neutral-400 bg-neutral-900 border border-neutral-900 rounded-sm px-2">
      {children}
    </span>
  )
}
