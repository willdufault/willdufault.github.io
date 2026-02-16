import { type ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Card({ children }: Props) {
  return (
    <div className="border border-neutral-800 rounded-sm p-4">{children}</div>
  )
}
