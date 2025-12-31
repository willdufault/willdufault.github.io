import awsLogo from "../../assets/images/aws-logo.webp"
import dockerLogo from "../../assets/images/docker-logo.webp"
import dynamoDbLogo from "../../assets/images/dynamodb-logo.webp"
import expressJsLogo from "../../assets/images/expressjs-logo.webp"
import gitLogo from "../../assets/images/git-logo.webp"
import javaLogo from "../../assets/images/java-logo.webp"
import javaScriptLogo from "../../assets/images/javascript-logo.webp"
import jenkinsLogo from "../../assets/images/jenkins-logo.webp"
import mongoDbLogo from "../../assets/images/mongodb-logo.webp"
import mySqlLogo from "../../assets/images/mysql-logo.webp"
import nodeJsLogo from "../../assets/images/nodejs-logo.webp"
import pythonLogo from "../../assets/images/python-logo.webp"
import reactLogo from "../../assets/images/react-logo.webp"
import typeScriptLogo from "../../assets/images/typescript-logo.webp"
import Card from "../Card"
import Title from "../Title"
import type { Skill } from "./types"

function Skills() {
  const skills: Skill[] = [
    {
      name: "Python",
      description: "Language",
      color: "bg-yellow-400/30",
      logo: pythonLogo,
      alt: "Python logo",
    },
    {
      name: "TypeScript",
      description: "Language",
      color: "bg-blue-500/30",
      logo: typeScriptLogo,
      alt: "TypeScript logo",
    },
    {
      name: "JavaScript",
      description: "Language",
      color: "bg-yellow-300/30",
      logo: javaScriptLogo,
      alt: "JavaScript logo",
    },
    {
      name: "Java",
      description: "Language",
      color: "bg-orange-500/30",
      logo: javaLogo,
      alt: "Java logo",
    },
    {
      name: "React",
      description: "Frontend library",
      color: "bg-blue-300/30",
      logo: reactLogo,
      alt: "React logo",
    },
    {
      name: "Node.js",
      description: "Backend framework",
      color: "bg-green-400/30",
      logo: nodeJsLogo,
      alt: "Node.js logo",
    },
    {
      name: "Express.js",
      description: "Backend framework",
      color: "bg-white/30",
      logo: expressJsLogo,
      alt: "Express.js logo",
    },
    {
      name: "MySQL",
      description: "Relational database",
      color: "bg-sky-800/30",
      logo: mySqlLogo,
      alt: "MySQL logo",
    },
    {
      name: "MongoDB",
      description: "NoSQL database",
      color: "bg-green-400/30",
      logo: mongoDbLogo,
      alt: "MongoDB logo",
    },
    {
      name: "DynamoDB",
      description: "Cloud database",
      color: "bg-indigo-500/30",
      logo: dynamoDbLogo,
      alt: "DynamoDB logo",
    },
    {
      name: "AWS",
      description: "Cloud provider",
      color: "bg-orange-400/30",
      logo: awsLogo,
      alt: "AWS logo",
    },
    {
      name: "Jenkins",
      description: "CI/CD tool",
      color: "bg-red-500/30",
      logo: jenkinsLogo,
      alt: "Jenkins logo",
    },
    {
      name: "Docker",
      description: "Container platform",
      color: "bg-blue-600/30",
      logo: dockerLogo,
      alt: "Docker logo",
    },
    {
      name: "Git",
      description: "Version control",
      color: "bg-orange-600/30",
      logo: gitLogo,
      alt: "Git logo",
    },
  ]

  return (
    <section>
      <Title>Skills</Title>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch">
        {skills.map((skill: Skill, index: number) => (
          <Card hover key={index}>
            <div className="h-fit flex gap-4 items-center">
              <div className={`p-3 h-fit shrink-0 rounded-md ${skill.color}`}>
                <img src={skill.logo} alt={skill.alt} className="w-8 h-8" />
              </div>
              <div>
                <h2>{skill.name}</h2>
                <p className="text-sm text-neutral-400">{skill.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Skills
