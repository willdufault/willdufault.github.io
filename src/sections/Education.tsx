import Divider from "../components/Divider"
import type { EducationRecord } from "../types/EducationRecord"

export default function Education() {
  const records: EducationRecord[] = [
    {
      school: "WPI",
      degrees: [
        {
          title: "BS in Computer Science",
          graduationDate: "May 2024",
        },
      ],
    },
  ]

  return (
    <>
      <h2>Education</h2>
      {records.map((record, index) => (
        <div key={record.school}>
          <h3>{record.school}</h3>
          {record.degrees.map((degree) => (
            <div
              className="mb-2 sm:mb-0 sm:flex sm:justify-between"
              key={degree.title}
            >
              <p>{degree.title}</p>
              <sub>{degree.graduationDate}</sub>
            </div>
          ))}
          {index !== records.length - 1 && <Divider />}
        </div>
      ))}
    </>
  )
}
