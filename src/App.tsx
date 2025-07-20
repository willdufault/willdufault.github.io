import Container from './components/Container'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Spacer from './components/Spacer'

function App() {
  return (
    <Container>
      <Hero />
      <Spacer />
      <Skills />
      <Spacer />
      <Experience />
      <Spacer />
      <Projects />
      <Spacer />
      <Education />
      <Spacer />
      <Footer />
    </Container>
  )
}

export default App
