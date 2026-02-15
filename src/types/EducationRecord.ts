export type Degree = {
  title: string
  graduationDate: string
}

export type EducationRecord = {
  school: string
  degrees: Degree[]
}
