/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../images/solo_logo.png"
import { NavLink } from "@remix-run/react"

export default function Header () {
  return (
    <header class="bg-gray-100 p-8 flex justify-between items-center">
      <div class="font-bold">
        <NavLink to="/">
          <img class="h-20" src={logo} alt="Collegium Logo"/>
        </NavLink>
      </div>
      <nav>
        <ul class="flex space-x-8 font-barlow text-5xl font-extralight">
          <li class="menu-link">
            <NavLink to="/events" className="hover:underline">Events</NavLink>
          </li>
          <li class="menu-link">
            <NavLink to="#" className="hover:underline">Watch</NavLink>
          </li>
          <li class="menu-link">
            <NavLink to="#" className="hover:underline">About</NavLink>
          </li>
          <li class="menu-link">
            <NavLink to="#" className="hover:underline">Donate</NavLink>
          </li>
          <li class="menu-link">
            <NavLink to="#" className="hover:underline">Connect</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}