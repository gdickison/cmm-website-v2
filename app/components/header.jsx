/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../images/solo_logo.png"
import { NavLink } from "@remix-run/react"

export default function Header () {
  return (
    <header className="bg-gray-100 p-8 flex justify-between items-center">
      <div className="font-bold">
        <NavLink to="/">
          <img className="h-20" src={logo} alt="Collegium Logo"/>
        </NavLink>
      </div>
      <nav>
        <ul className="flex space-x-8 font-barlow text-5xl font-extralight">
          <li className="menu-link">
            <NavLink to="/events" className="hover:underline">Events</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="#" className="hover:underline">Watch</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="#" className="hover:underline">About</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="#" className="hover:underline">Donate</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="#" className="hover:underline">Connect</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}