import Hero from "./sections/Hero.tsx"
import Spacer from "./components/Spacer.tsx"
import Experience from "./sections/Experience.tsx"
import Projects from "./sections/Projects.tsx"
import Education from "./sections/Education.tsx"
import Contact from "./sections/Contact.tsx"
import Footer from "./sections/Footer.tsx"

export default function App() {
  return (
    <>
      <Hero />
      <Spacer />
      <Experience />
      <Spacer />
      <Projects />
      <Spacer />
      <Education />
      <Spacer />
      <Contact />
      <Spacer />
      <Footer />
    </>
  )
}
