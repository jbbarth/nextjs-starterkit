import ActiveLink from "./ActiveLink"

const Header = () => (
  <div>
    <div className="mt-2 p-2 text-xl font-semibold">
      <span className="text-orange-darker">FOOBAR</span>.example.com
    </div>
    <nav className="border-b border-t border-grey-light p-3 mb-2">
      <ul className="list-reset flex font-bold">
        <li className="mr-6">
          <ActiveLink prefetch href="/">Home</ActiveLink>
        </li>
        <li className="mr-6">
          <ActiveLink href="/about">About</ActiveLink>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
