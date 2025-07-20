import Contact from '../Contact'
import Spacer from '../Spacer'

function Hero() {
  return (
    <header>
      <Spacer />
      <h1 className="text-5xl font-bold mb-1">Will Dufault</h1>
      <p className="text-lg mb-4 text-neutral-400">
        Software Engineer | Cloud Engineer at BJ's Wholesale Club
      </p>
      <Contact />
    </header>
  )
}

export default Hero
