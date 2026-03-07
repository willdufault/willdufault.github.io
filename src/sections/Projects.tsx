import Card from "../components/Card"
import Pill from "../components/Pill"
import type { Project } from "../types/Project"

export default function Projects() {
  const projects: Project[] = [
    {
      name: "clover",
      description: "Personal productivity app.",
      url: "https://github.com/willdufault/clover",
      skills: ["TypeScript", "Python", "React", "Supabase"]
    },
    {
      name: "AI Chess",
      description: "Chess with AI opponent.",
      url: "https://github.com/willdufault/ai-chess",
      skills: ["Python", "pytest", "cProfile"]
    },
    {
      name: "minifi",
      description: "Tech article-sharing platform.",
      url: "https://github.com/willdufault/minifi",
      skills: ["TypeScript", "React", "Node.js", "Express.js", "MongoDB"]
    },
    {
      name: "Fractal Playground",
      description: "Playground for visualizing fractals.",
      url: "https://willdufault.dev/fractal-playground/",
      skills: ["JavaScript", "C", "WebAssembly"]
    }
  ]

  return (
    <>
      <h2>Projects</h2>
      <div className="grid grid-cols-2 gap-2">
        {projects.map((project) => (
          <Card key={project.name}>
            <a href={project.url} className="hover:underline">
              {project.name}&nbsp;&rarr;
            </a>
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.skills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
