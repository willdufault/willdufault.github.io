import Divider from "../components/Divider"
import Pill from "../components/Pill"
import type { ExperienceRecord } from "../types/ExperienceRecord"

export default function Experience() {
  const records: ExperienceRecord[] = [
    {
      company: "BJ's Wholesale Club",
      roles: [
        {
          title: "Cloud Software Engineer",
          startDate: "Aug 2024",
          endDate: "Now",
        },
        {
          title: "Cloud Software Engineer Intern",
          startDate: "May 2023",
          endDate: "Aug 2024",
        },
      ],
      skills: ["Python", "AWS", "DynamoDB", "Jenkins", "Docker"],
    },
    {
      company: "WPI",
      roles: [
        {
          title: "Undergraduate Teaching Assistant",
          startDate: "Sep 2023",
          endDate: "Dec 2023",
        },
      ],
      skills: ["Python", "Java"],
    },
  ]

  return (
    <>
      <h2>Experience</h2>
      {records.map((record, index) => (
        <div key={record.company}>
          <h3>{record.company}</h3>
          {record.roles.map((role) => (
            <div
              className="mb-2 sm:mb-0 sm:flex sm:justify-between"
              key={role.title}
            >
              <p>{role.title}</p>
              <sub>
                {role.startDate}&nbsp;&rarr;&nbsp;{role.endDate}
              </sub>
            </div>
          ))}
          <div className="flex flex-wrap gap-2 mt-3">
            {record.skills.map((skill) => (
              <Pill key={skill}>{skill}</Pill>
            ))}
          </div>
          {index !== records.length - 1 && <Divider />}
        </div>
      ))}
    </>
  )
}
