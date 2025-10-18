import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'
import type { Social } from './types'

function Contact() {
  const socials: Social[] = [
    {
      name: 'Email',
      icon: faEnvelope,
      url: 'mailto:hello@willdufault.dev?subject=Inquiry%20from%20willdufault.dev&body=Hi%20Will%2C%0A%0AI%20checked%20out%20your%20website%20and%20would%20love%20to%20chat%20about%20any%20opportunities%20or%20projects.%20Let%20me%20know%20when%E2%80%99s%20a%20good%20time%20to%20connect!%0A%0AThanks%2C%0A%5BYour%20name%5D  ',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/willdufault',
    },
    { name: 'GitHub', icon: faGithub, url: 'https://github.com/willdufault' },
    {
      name: 'Resume',
      icon: faFileLines,
      url: 'https://drive.google.com/file/d/1cbYZeUopZ7CCBZy02p3CCpjk9un6IxUc/view',
    },
  ]
  return (
    <section>
      <h2 className="font-bold text-lg mb-2">Get in touch!</h2>
      <div className="flex flex-wrap gap-2">
        {socials.map((social: Social, index: number) => (
          <Button icon={social.icon} url={social.url} key={index}>
            {social.name}
          </Button>
        ))}
      </div>
    </section>
  )
}

export default Contact
