import Head from 'next/head'
import Header from './Header'

const Layout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    <div className="flex">
      <div className="w-full h-12 p-2">
        {props.children}
      </div>
    </div>
  </div>
)

export default Layout
