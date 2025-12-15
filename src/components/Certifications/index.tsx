import awsAiPractitionerLogo from "../../assets/images/aws-ai-practitioner-logo.webp"
import awsCloudPractitionerLogo from "../../assets/images/aws-cloud-practitioner-logo.webp"
import awsSolutionsArchitectAssociateLogo from "../../assets/images/aws-solutions-architect-associate-logo.webp"
import Card from "../Card"
import Title from "../Title"
import type { Certification } from "./types"

function Certifications() {
  const skills: Certification[] = [
    {
      name: "AWS Solutions Architect – Associate",
      date: "Jul 2024",
      logo: awsSolutionsArchitectAssociateLogo,
      alt: "AWS Certified Solutions Architect – Associate logo",
      url: "https://www.credly.com/badges/b71f2044-72f0-4afe-9185-2090be6cfaf4",
    },
    {
      name: "AWS AI Practitioner",
      date: "Dec 2025",
      logo: awsAiPractitionerLogo,
      alt: "AWS Certified AI Practitioner logo",
      url: "https://www.credly.com/badges/82e3ba18-46f3-49e5-b344-c48d8c9eb9a4",
    },
    {
      name: "AWS Cloud Practitioner",
      date: "Nov 2024",
      logo: awsCloudPractitionerLogo,
      alt: "AWS Certified Cloud Practitioner logo",
      url: "https://www.credly.com/badges/603b982a-6936-4c68-8b64-a07cae33f6d0",
    },
  ]

  return (
    <section>
      <Title>Certifications</Title>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 items-stretch">
        {skills.map((certification: Certification, index: number) => (
          <Card key={index}>
            <div className="flex gap-4 items-center">
              <img
                src={certification.logo}
                alt={certification.alt}
                className="w-20 h-20"
              />
              <div>
                <a href={certification.url} className="hover:underline">
                  {certification.name}
                </a>
                <p className="text-sm text-neutral-400">{certification.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Certifications
