import awsCloudPractitionerLogo from '../../assets/images/aws-cloud-practitioner.webp'
import awsSolutionsArchitectAssociateLogo from '../../assets/images/aws-solutions-architect-associate.webp'
import Card from '../Card'
import Title from '../Title'
import type { Certification } from './types'

function Certifications() {
  const skills: Certification[] = [
    {
      name: 'Solutions Architect - Associate',
      issuer: 'AWS',
      date: 'Jul 2024',
      logo: awsSolutionsArchitectAssociateLogo,
      alt: 'AWS Certified Solutions Architect logo',
    },
    {
      name: 'Cloud Practitioner',
      issuer: 'AWS',
      date: 'Nov 2024',
      logo: awsCloudPractitionerLogo,
      alt: 'AWS Certified Cloud Practitioner logo',
    },
  ]

  return (
    <section>
      <Title>Certifications</Title>
      <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 items-stretch'>
        {skills.map((certification: Certification, index: number) => (
          <Card key={index}>
            <div className='flex flex-col sm:flex-row gap-4'>
              <img
                src={certification.logo}
                alt={certification.alt}
                className='w-20 h-20'
              />
              <div>
                <h2 className='font-bold'>{certification.issuer}</h2>
                <h3>{certification.name}</h3>
                <p className='text-sm text-neutral-400'>{certification.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Certifications
