export default function Footer () {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <div className="mb-4 font-bold text-xl">This is the footer</div>
      <nav>
        <ul className="flex justify-center space-x-6 font-barlow font-extralight text-3xl">
          <li className="menu-link">Events</li>
          <li className="menu-link">Watch</li>
          <li className="menu-link">About</li>
          <li className="menu-link">Donate</li>
          <li className="menu-link">Connect</li>
        </ul>
      </nav>
    </footer>
  )
}