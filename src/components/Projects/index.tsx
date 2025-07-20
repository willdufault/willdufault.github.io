import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import type { ReactNode } from 'react'
import _24OursScreenshot from '../../assets/images/24ours-screenshot.webp'
import aiChessScreenshot from '../../assets/images/ai-chess-screenshot.webp'
import fractalPlaygroundScreenshot from '../../assets/images/fractal-playground-screenshot.webp'
import minifiScreenshot from '../../assets/images/minifi-screenshot.webp'
import Button from '../Button'
import Card from '../Card'
import Tags from '../Tags'
import Title from '../Title'
import type { Project } from './types'

function Projects() {
  const projects: Project[] = [
    {
      name: 'minifi',
      description: 'Full-stack tech article-sharing platform.',
      skills: [
        'TypeScript',
        'React',
        'Tailwind',
        'Node.js',
        'Express.js',
        'MongoDB',
      ],
      image: minifiScreenshot,
      alt: 'minifi screenshot',
      repoUrl: 'https://github.com/willdufault/minifi',
    },
    {
      name: '24Ours',
      description: 'Cloud-based temporary file-sharing service.',
      skills: ['JavaScript', 'Python', 'Node.js', 'Express.js', 'AWS'],
      image: _24OursScreenshot,
      alt: '24Ours screenshot',
      repoUrl: 'https://github.com/willdufault/24ours',
    },
    {
      name: 'Fractal Playground',
      description: 'Playground for visualizing Julia set fractals.',
      skills: ['JavaScript', 'C', 'WebAssembly', 'HTML', 'CSS'],
      image: fractalPlaygroundScreenshot,
      alt: 'Fractal Playground screenshot',
      repoUrl: 'https://github.com/willdufault/fractal-playground',
      liveUrl: 'https://willdufault.dev/fractal-playground',
    },
    {
      name: 'AI Chess',
      description: 'Chess with AI opponent and custom engine.',
      skills: ['Python'],
      image: aiChessScreenshot,
      alt: 'AI Chess screenshot',
      repoUrl: 'https://github.com/willdufault/ai-chess',
    },
  ]

  /**
   * Render the live button.
   * @param liveUrl The live URL.
   * @returns The live button.
   */
  function renderLiveButton(liveUrl: string | undefined): ReactNode {
    if (liveUrl !== undefined) {
      return (
        <Button icon={faArrowUpRightFromSquare} url={liveUrl}>
          Live
        </Button>
      )
    }
  }

  return (
    <section>
      <Title>Projects</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((project: Project, projectIndex: number) => (
          <Card key={projectIndex}>
            <img
              src={project.image}
              alt={project.alt}
              className="rounded-md mb-4"
            />
            <h2 className="font-bold">{project.name}</h2>
            <p className="mb-4">{project.description}</p>
            <Tags items={project.skills} />
            <div className="flex flex-wrap gap-2 mt-4">
              <Button icon={faGithub} url={project.repoUrl}>
                Code
              </Button>
              {renderLiveButton(project.liveUrl)}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects
