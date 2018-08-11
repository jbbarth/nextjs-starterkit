import Link from 'next/link'

const Header = () => (
  <div>
    <div className="mt-2 p-2 text-xl font-semibold">
      <span className="text-orange-darker">FOOBAR</span>.example.com
    </div>
    <nav className="border-b border-t border-grey-light p-3 mb-2">
      <ul className="list-reset flex font-bold">
        <li className="mr-6">
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
