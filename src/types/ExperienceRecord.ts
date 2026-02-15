export type Role = {
  title: string
  startDate: string
  endDate: string
}

export type ExperienceRecord = {
  company: string
  roles: Role[]
  skills: string[]
}
