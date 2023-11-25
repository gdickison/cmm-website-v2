import { NavLink } from "@remix-run/react"

export default function Footer () {
  return (
    <footer className="bg-transparent p-4 text-center text-blue-50">
      <div className="mb-4 font-bold text-xl">This is the footer</div>
      <nav>
        <ul className="flex justify-center space-x-6 font-barlow font-extralight text-3xl">
          <li className="menu-link">
            <NavLink to="/events" className="hover:underline underline-offset-8 decoration-[#8B0000]">Events</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="#" className="hover:underline underline-offset-8 decoration-[#8B0000]">Watch</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="#" className="hover:underline underline-offset-8 decoration-[#8B0000]">About</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="#" className="hover:underline underline-offset-8 decoration-[#8B0000]">Donate</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="#" className="hover:underline underline-offset-8 decoration-[#8B0000]">Connect</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}