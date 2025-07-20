import type { ReactNode } from 'react'
import wpiSeal from '../../assets/images/wpi-seal.webp'
import Card from '../Card'
import Title from '../Title'
import type { Degree } from './types'

function Education() {
  const degrees: Degree[] = [
    {
      school: 'WPI',
      title: 'Bachelor of Science',
      major: 'Computer Science',
      minor: 'Data Science',
      start: 'Aug 2020',
      end: 'May 2024',
      seal: wpiSeal,
      alt: 'WPI seal',
    },
  ]

  function renderMinor(minor: string | undefined): ReactNode {
    if (minor !== undefined) {
      return <h3>Minor in {minor}</h3>
    }
  }

  return (
    <section>
      <Title>Education</Title>
      {degrees.map((degree: Degree, degreeIndex: number) => (
        <Card key={degreeIndex}>
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src={degree.seal}
              alt={degree.alt}
              className="w-24 h-24 rounded-md"
            />
            <div>
              <h2 className="font-bold">{degree.school}</h2>
              <h3>
                {degree.title} in {degree.major}
              </h3>
              {renderMinor(degree.minor)}
              <p className="text-sm text-neutral-400">
                {degree.start} &rarr; {degree.end}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </section>
  )
}

export default Education
