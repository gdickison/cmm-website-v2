/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../images/solo_logo_white.png"
import { NavLink } from "@remix-run/react"

export default function Header () {
  return (
    <header className="bg-transparent p-8 flex justify-between items-center">
      <div className="font-bold">
        <NavLink to="/">
          <img className="h-[16vw] md:h-auto md:w-[10vw]" src={logo} alt="Collegium Logo"/>
        </NavLink>
      </div>
      <nav>
        <ul className="hidden md:flex space-x-8 font-barlow text-[3.5vw] lg:text-[3vw] font-extralight text-blue-50">
          <li className="menu-link">
            <NavLink to="/#events" className="hover:underline underline-offset-8 decoration-[#8B0000]">Events</NavLink>
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
    </header>
  )
}