export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="text-right">
      <sub>&copy; {year} Will Dufault</sub>
    </div>
  )
}
