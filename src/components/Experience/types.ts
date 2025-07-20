export type Role = {
  title: string
  start: string
  end: string
}

export type Job = {
  company: string
  roles: Role[]
  skills: string[]
  logo: string
  alt: string
}
