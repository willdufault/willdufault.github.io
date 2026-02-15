import type { Social } from "../types/Social"

export default function Contact() {
  const socials: Social[] = [
    {
      name: "Email",
      text: "hello@willdufault.dev",
      url: "mailto:hello@willdufault.dev",
    },
    {
      name: "GitHub",
      text: "willdufault",
      url: "https://github.com/willdufault",
    },
    {
      name: "LinkedIn",
      text: "willdufault",
      url: "https://www.linkedin.com.in/willdufault",
    },
    {
      name: "Resume",
      text: "View →",
      url: "https://drive.google.com/file/d/1cbYZeUopZ7CCBZy02p3CCpjk9un6IxUc/view",
    },
  ]

  return (
    <>
      <h2>Contact</h2>
      {socials.map((social) => (
        <div key={social.name}>
          {social.name}:&nbsp;
          <a
            href={social.url}
            className="text-neutral-400 underline hover:text-white"
          >
            {social.text}
          </a>
        </div>
      ))}
    </>
  )
}
