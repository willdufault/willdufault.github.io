import Section from '../../Section';
import SectionTitle from '../../SectionTitle';
import Spacer from '../../Spacer';
import Card from '../../Card';
import Skill from '../../Skill';
import bjsLogo from '../../../assets/images/bjs-logo.jpg';
import wpiSeal from '../../../assets/images/wpi-seal.png'
// import upworkLogo from '../../../assets/images/upwork-logo.jpg'

export default function Experience() {
  interface PositionData {
    title: string
    description: string[]
    startDate: string
    endDate: string
  }
  interface CompanyData {
    company: string,
    imageSrc: string,
    skills: string[][]
    positions: PositionData[]
  }

  const jobs: CompanyData[] = [
    {
      company: 'BJ\'s Wholesale Club',
      imageSrc: bjsLogo,
      skills: [
        ['Python', 'backend'],
        ['AWS', 'backend'],
        ['Jenkins', 'devops'],
        ['Docker', 'devops'],
        ['Bash', 'devops'],
      ],
      positions: [
        {
          title: 'Cloud Engineer',
          description: [
            'Led a cross-departmental team to delete 320+ TB of duplicate data from S3 using Python, saving $67,000 per year',
            'Decreased S3 backup time by 98% by using Python with multithreading to efficiently copy files between folders',
          ],
          startDate: 'Aug 2024',
          endDate: 'Present',
        },
        {
          title: 'Cloud Engineer Intern',
          description: [
            'Earned the Pacesetter Award for ranking in the top 10% of interns in the Management Development Program',
            'Implemented 3 SageMaker lifecycle configurations to automatically stop idle instances, saving $3,500 per year',
            'Engineered an alert system to monitor EC2 instances using Python, Lambda, and SNS, saving $2,300 per year'
          ],
          startDate: 'May 2023',
          endDate: 'Aug 2024'
        }
      ]
    },
    {
      company: 'WPI',
      skills: [
        ['Java', 'backend'],
        ['Python', 'backend'],
        ['Data structures', 'backend'],
        ['Algorithms', 'backend'],
        ['Design Patterns', 'backend']
      ],
      imageSrc: wpiSeal,
      positions: [
        {
          title: 'Undergraduate Teaching Assistant',
          description: [
            'Mentored and taught the fundamentals of Java and object-oriented programming to a class of 400+ students',
            'Expedited grading by 10%+ by using Python and regular expressions to automatically reject incorrect responses',
            'Troubleshot problems in labs and office hours and guided 5+ students per session through testing and debugging'
          ],
          startDate: 'Sep 2023',
          endDate: 'Dec 2023',
        }
      ]
    }
    // {
    //   position: 'Web Developer',
    //   company: 'Upwork',
    //   description: [
    //     // todo: Build up a portfolio first.
    //   ],
    //   startDate: 'Jul 2024',
    //   endDate: 'Present',
    //   skills: [
    //     ['React', 'frontend'],
    //     ['TypeScript', 'frontend'],
    //     ['Bootstrap', 'frontend'],
    //     ['Tailwind', 'frontend']
    //   ],
    //   imageSrc: upworkLogo
    // },
  ]

  return (
    <>
      <Section id='experience' isAlternate={true}>
        <SectionTitle>Experience</SectionTitle>
        <div className='flex flex-col gap-y-3'>
          {jobs.map((company, company_index) =>
            <Card key={company_index}>
              <div className='sm:flex sm:gap-4'>
                <img src={company.imageSrc} alt={`${company.company}'s logo`} className='w-24 h-24 mb-2 rounded-xl' />
                <div>
                  {company.positions.map((position, position_index) =>
                    <div className='pb-3' key={position_index}>
                      <h4 className='font-semibold'>{position.title}</h4>
                      <p>{company.company}</p>
                      <sub className='bottom-0 text-zinc-500'>{position.startDate} &rarr; {position.endDate}</sub>
                      <ul className='list-disc list-inside pl-3 pt-1'>
                        {position.description.map((bullet, bullet_index) =>
                          <li key={bullet_index}>{bullet}</li>
                        )}
                      </ul>
                    </div>
                  )}
                  <div className='flex flex-wrap gap-1 pt-1'>
                    {company.skills.map(([skill, category], index) =>
                      <Skill key={index} category={category}>{skill}</Skill>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
        <Spacer></Spacer>
      </Section>
    </>
  )
}