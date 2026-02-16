import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Pill({ children }: Props) {
  return (
    <span className="text-sm text-neutral-400 border border-neutral-800 rounded-sm px-2">
      {children}
    </span>
  )
}
