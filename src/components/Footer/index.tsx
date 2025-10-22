function Footer() {
  const year: number = new Date().getFullYear()

  return (
    <footer className="py-4 border-t border-zinc-600">
      <p className="text-neutral-400">&copy; {year} Will Dufault</p>
    </footer>
  )
}

export default Footer
