import bjsLogo from '../../assets/images/bjs-logo.webp'

import wpiSeal from '../../assets/images/wpi-seal.webp'
import Card from '../Card'
import Tags from '../Tags'
import type { Job, Role } from './types'

function Experience() {
  const jobs: Job[] = [
    {
      company: "BJ's Wholesale Club",
      roles: [
        {
          title: 'Cloud Software Engineer',
          start: 'Aug 2024',
          end: 'Now',
        },
        {
          title: 'Cloud Software Engineer Intern',
          start: 'May 2023',
          end: 'Aug 2024',
        },
      ],
      skills: ['Python', 'AWS', 'DynamoDB', 'Jenkins', 'Docker'],
      logo: bjsLogo,
      alt: "Bj's Wholesale Club logo",
    },
    {
      company: 'WPI',
      roles: [
        {
          title: 'Undergraduate Teaching Assistant',
          start: 'Sep 2023',
          end: 'Dec 2023',
        },
      ],
      skills: ['Java', 'Python'],
      logo: wpiSeal,
      alt: 'WPI seal',
    },
  ]
  return (
    <section>
      <h1 className="font-bold text-2xl mb-4">Experience</h1>
      <div className="flex flex-col gap-2">
        {jobs.map((job: Job, jobIndex: number) => (
          <Card key={jobIndex}>
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={job.logo}
                alt={job.alt}
                className="w-24 h-24 rounded-md"
              />
              <div>
                <h2 className="font-bold">{job.company}</h2>
                <div className="mb-4 flex flex-col gap-2">
                  {job.roles.map((role: Role, roleIndex: number) => (
                    <div key={roleIndex}>
                      <h3>{role.title}</h3>
                      <p className="text-sm text-neutral-400">
                        {role.start} &rarr; {role.end}
                      </p>
                    </div>
                  ))}
                </div>
                <Tags items={job.skills} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Experience
