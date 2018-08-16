import React from "react"
import ActiveLink from "./ActiveLink"

const Header = () => (
  <div className="pt-1 bg-grey-lightest border-b border-grey-light mb-1">
    <div className="px-4 py-2 text-xl font-semibold">
      <span className="text-orange-darker">FOOBAR</span>.example.com
    </div>
    <nav className="px-4 py-3 py-2">
      <ul className="list-reset flex font-semibold">
        <li className="mr-6">
          <ActiveLink prefetch href="/">
            Home
          </ActiveLink>
        </li>
        <li className="mr-6">
          <ActiveLink href="/settings">Settings</ActiveLink>
        </li>
        <li className="mr-6">
          <ActiveLink href="/about">About</ActiveLink>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
